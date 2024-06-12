"use client"
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { getFileGroup, uploadFile } from "@/actions/client/groups";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";
import { saveAs } from 'file-saver';
import { useToast } from "@/components/ui/use-toast";

export default function Page({ params }) {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const idGroup = params.slug;
  const { toast } = useToast();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getFileGroup(idGroup);
        setFiles(responseData);
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, [idGroup]);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile) {
      const formData = new FormData();
      formData.append('doc', selectedFile);
      formData.append('idGroup', idGroup);
      
      try {
        await uploadFile(formData);
        // Refresh the list of files after successful upload
        const updatedResponse = await getFileGroup(idGroup);
        setFiles(updatedResponse);
        toast({
          title: "File uploaded successfully",
          status: "success",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "File upload failed",
          status: "error",
        });
      }
    }
  };

  return (
    <div className="max-w-[870px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Group {params.slug}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Documents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl my-6">Mes Documents</h1>
        <div>
          <label
            htmlFor="file"
            className="flex gap-2 items-center bg-primary rounded py-2 px-5 text-white hover:opacity-80 cursor-pointer"
          >
            <FaPlus /> <span>Ajouter document</span>
          </label>
          <Input
            type="file"
            className="hidden"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="w-full p-5 bg-white rounded-xl space-y-4">
        {files?.map((filePath, index) => (
          <DocumentItem key={index} filePath={filePath} />
        ))}
      </div>
    </div>
  );
}

const DocumentItem = ({ filePath }) => {
  const fileNameWithExtension = filePath.split('/').pop(); // Extracting the file name with extension
  const fileName = fileNameWithExtension.split('.')[0]; // Extracting the file name without extension

  const handleDownload = async () => {
    try {
      const response = await fetch(`http://localhost:7777/ms-group/document/fileContent/${fileNameWithExtension}`);
      const blob = await response.blob();
      saveAs(blob, fileNameWithExtension);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className="border p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-primary text-white">
          <IoDocumentText size={24} />
        </div>
        <div>
          <Link href={`http://localhost:7777/ms-group/document/fileContent/${fileNameWithExtension}`} target="blank">
            <p className="font-bold text-lg">{fileName}</p>
          </Link>
          <p className="text-sm text-gray-500">
            {new Date("13 Mars 2024").toDateString()}
          </p>
        </div>
      </div>
      <div>
        <Button variant="ghost">
          <MdOutlineFileDownload onClick={handleDownload} size={22} className="text-primary" />
        </Button>
      </div>
    </div>
  );
};
