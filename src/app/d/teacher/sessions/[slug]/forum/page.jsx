"use client";  // Change 1

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
import { useEffect, useState } from "react";  // Change 2
import { getForumeBYIdSession } from "@/actions/client/forume";
import { getAllPostOfForum } from "@/actions/client/forume";

const dataProps = [
  {
    name: "Marwa",
    role: "Student",
    createdAt: "2024-06-03",
    titre: "Introduction to AI",
    text: "This is a brief introduction to artificial intelligence."
  },
  {
    name: "John",
    role: "Professor",
    createdAt: "2024-06-02",
    titre: "Advanced Machine Learning",
    text: "An in-depth look into machine learning algorithms and applications."
  }
];

export default function page({ params }) {
  const groupContainerId = params.slug;  
  const [data, setData] = useState([]);  
  const [post, setposts] = useState([]);  

  const fetchData = async () => {  
    try {
      const responseData = await getForumeBYIdSession(groupContainerId);
      setData(responseData);
      const post = await getAllPostOfForum(responseData[0]._id);
      setposts(post);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {  
    fetchData();
  }, []);

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
            <BreadcrumbPage>Forum {data?.[0]?.createdAt} </BreadcrumbPage> 
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
          <CreatePublication idF={data?.[0]?._id} fetchData={fetchData} />
          {post?.map((s) => (
            <Posting
              key={s._id}
              name={s.author_full_name}
              role={s.role}
              text={s.text}
              titre={s.title}
              createdAT={s.createdAt}
              img={s.content}
              idP={s._id}
            />
          ))}
        </TabsContent>
        <TabsContent value="messages">
          <Messenger />
        </TabsContent>
      </Tabs>
    </>
  );
}
