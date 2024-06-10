"use client"
import { Button } from 'antd';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export const displayFile = async (examSolutionPath) => {
  const response = await fetch(`http://localhost:8090/admin/display/${examSolutionPath}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response;
};


export default function FileDisplay({params}){

  const searchParams = useSearchParams();
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");

  useEffect(() => {
    const fetchAndDisplayFile = async () => {
      try {
        const response = await displayFile(params.examSolutionPath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
        setFileType(blob.type);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndDisplayFile();
  }, [params.examSolutionPath]);

  const renderFile = () => {
    if (!fileUrl) {
      return <p>Loading...</p>;
    }

    switch (fileType) {
      case 'application/pdf':
        return <iframe src={fileUrl} type="application/pdf" width="100%" height="600px" title="PDF file"></iframe>;
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
        return <img src={fileUrl} alt="File" width="100%" height="auto" />;
      case 'text/plain':
        return <iframe src={fileUrl} type="text/plain" width="100%" height="600px" title="Text file"></iframe>;
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': // .docx
      case 'application/msword': // .doc
        return <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`} width="100%" height="600px" title="Word file"></iframe>;
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': // .xlsx
      case 'application/vnd.ms-excel': // .xls
        return <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`} width="100%" height="600px" title="Excel file"></iframe>;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation': // .pptx
      case 'application/vnd.ms-powerpoint': // .ppt
        return <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`} width="100%" height="600px" title="PowerPoint file"></iframe>;
      case 'audio/mpeg':
      case 'audio/ogg':
      case 'audio/wav':
        return <audio controls src={fileUrl} type={fileType}>Your browser does not support the audio element.</audio>;
      case 'video/mp4':
      case 'video/ogg':
      case 'video/webm':
        return <video controls width="100%" height="auto" src={fileUrl} type={fileType}>Your browser does not support the video element.</video>;
      default:
        return <a href={fileUrl} target="_blank" rel="noopener noreferrer">Open File</a>;
    
    }
  };

  return (
      <div>
        <h1 className="font-bold text-2xl mb-2">
        Solution D'Examen de {searchParams.get("language")} - Niveau {params.levelName}
        </h1>
        
        {renderFile()}
        <div style={{ marginTop: '20px' }}>
         <div class="flex justify-between">
          <Button href={`http://localhost:8090/admin/download/${params.examSolutionPath}`} download className="btn btn-primary">Download File</Button>
          <Button href={fileUrl} target="_blank" rel="noopener noreferrer" className=" btn btn-primary btn-start rounded">Open File in browser</Button>
         </div>
        </div>
      </div>
)
    
  
};

