import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FiUpload } from "react-icons/fi";

const DUMMY = {
  link: "https://pdfobject.com/pdf/sample.pdf",
  deadline: "06/17/2024",
  subject: "Francais",
  level: "A1",
};

export default function page() {
  return (
    <>
      <h1 className="font-bold text-2xl">
        Examen de {DUMMY.subject} - Niveau {DUMMY.level}
      </h1>
      <div className="grid lg:grid-cols-2 gap-12 mt-8">
        <div className="w-full h-auto aspect-[21/29]">
          <iframe src={DUMMY.link} className="w-full h-full" />
        </div>
        <div className="space-y-4">
          <p className="text-xl">
            <strong>Deadline:</strong> {new Date(DUMMY.deadline).toDateString()}
          </p>
          <form className="space-y-3">
            <div className="relative border border-black border-dashed rounded-lg w-full py-16">
              <Input
                type="file"
                className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                id="file"
                name="file"
              />
              <label htmlFor="file" className="cursor-pointer block mt-3">
                <span className="text-black flex items-center justify-center">
                  <FiUpload className="mr-2" /> Upload Solution
                </span>
              </label>
            </div>
            <div className="text-right">
              <Button className="px-12">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
