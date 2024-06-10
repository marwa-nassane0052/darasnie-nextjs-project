"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProfNumber, getSessionNUmber, getStudentNumber } from "@/actions/client/groups";
import { VscGitStashApply,VscMortarBoard,VscRepoClone } from "react-icons/vsc";
import { useEffect,useState } from "react";

export default function Cards() {
  const [sessionNumber,setSessionNUmber]=useState(0)
  const [studentNUmber,setStudentNumber]=useState()
  const [ProfNumber,setProfNumber]=useState()

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
       
        const res=await getSessionNUmber()
        setSessionNUmber(res)

        const res2=await getStudentNumber()
        setStudentNumber(res2)

        const res3=await getProfNumber()
        setProfNumber(res3)
     
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 

  
  return (
    <div className="flex gap-4">
    <Card className="flex items-center w-[300px]">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscMortarBoard
      className="text-4xl items-center " />
      </div>
      <CardHeader>
        <CardTitle>{studentNUmber}</CardTitle>
        <CardDescription>Etudiants total</CardDescription>
      </CardHeader>
    </Card>
    <Card className="flex items-center w-[300px] ">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscRepoClone
 
      className="text-4xl items-center" />
      </div>
      <CardHeader>
        <CardTitle>{sessionNumber}</CardTitle>
        <CardDescription>Sessions total</CardDescription>
      </CardHeader>
    </Card>

    <Card className="flex items-center w-[300px]">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscGitStashApply 
      className="text-4xl items-center" />
      </div>
      <CardHeader>
        <CardTitle>{ProfNumber}</CardTitle>
        <CardDescription>Inscriptions total</CardDescription>
      </CardHeader>
    </Card>
   
   
    </div>
  );
}
