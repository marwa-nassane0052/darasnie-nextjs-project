"use client";

import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";

export default function page({ params }) {
  const uploadDoc = (event) => {
    console.log(event.target.files[0]);
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
            onChange={uploadDoc}
          />
        </div>
      </div>
      <div className="w-full p-5 bg-white rounded-xl space-y-4">
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
    </div>
  );
}

const DocumentItem = () => {
  return (
    <div className="border p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-primary text-white">
          <IoDocumentText size={24} />
        </div>
        <div>
          <p className="font-bold text-lg">Exercices de probabilités</p>
          <p className="text-sm text-gray-500">
            {new Date("13 Mars 2024").toDateString()}
          </p>
        </div>
      </div>
      <div>
        <Button variant="ghost">
          <MdOutlineFileDownload size={22} className="text-primary" />
        </Button>
      </div>
    </div>
  );
};
