import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VscGitStashApply,VscMortarBoard,VscRepoClone } from "react-icons/vsc";

export default function Cards() {
  return (
    <div className="flex gap-4">
    <Card className="flex items-center w-[300px]">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscMortarBoard
      className="text-4xl items-center " />
      </div>
      <CardHeader>
        <CardTitle>200</CardTitle>
        <CardDescription>Etudiants total</CardDescription>
      </CardHeader>
    </Card>
    <Card className="flex items-center w-[300px] ">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscRepoClone
 
      className="text-4xl items-center" />
      </div>
      <CardHeader>
        <CardTitle>15</CardTitle>
        <CardDescription>Sessions total</CardDescription>
      </CardHeader>
    </Card>

    <Card className="flex items-center w-[300px]">
      <div className="ml-7 p-3 text-purple-added  bg-[#d6c6f4] rounded-full flex items-center justify-center">
      <VscGitStashApply 
      className="text-4xl items-center" />
      </div>
      <CardHeader>
        <CardTitle>10</CardTitle>
        <CardDescription>Inscriptions total</CardDescription>
      </CardHeader>
    </Card>
   
   
    </div>
  );
}
