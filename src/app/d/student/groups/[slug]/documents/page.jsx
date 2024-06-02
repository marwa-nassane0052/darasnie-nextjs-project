import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function page({ params }) {
  return (
    <div className="max-w-[870px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/d/student/groups">Groups</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Group {params.slug}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Documents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="font-bold text-xl my-6">Mes Documents</h1>
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
