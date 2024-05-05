import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Posting from "./_components/forum/Posting";
import Messenger from "./_components/messagerie/Messenger";
import CreatePublication from "./_components/forum/CreatePublication";

export default function page({ params }) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/d/teacher/sessions">Sessions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Session {params.slug}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Forum</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="forum" className="max-w-[500px] mx-auto mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="messages">Messagerie</TabsTrigger>
        </TabsList>
        <hr className="my-4" />
        <TabsContent value="forum" className="space-y-3">
          <CreatePublication />
          <Posting />
          <Posting />
        </TabsContent>
        <TabsContent value="messages">
          <Messenger />
        </TabsContent>
      </Tabs>
    </>
  );
}
