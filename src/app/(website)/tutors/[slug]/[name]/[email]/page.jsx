"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import moment from "moment";
import { Card } from "antd";
import CalendarComponent from "@/components/Calendar";
import { auth } from "@/auth";
import { useState,useEffect} from "react";
import { fetchGroupsData } from "../../../fetch";
const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Session ",
  },
];
const groups = [
  {
    id: "1",
    group: "Groupe 01",
    deadline: "12/12/2024",
    dates: "[12/12/2012,12/12/2012,12/12/2012]",
  },
  {
    id: "2",
    group: "Groupe 02",
    dates: "[12/12/2012,12/12/2012,12/12/2012]",
    deadline: "13 Mars 2024",
  },
  {
    id: "3",
    dates: "[12/12/2012,12/12/2012,12/12/2012]",
    group: "Groupe 03",
    deadline: "13 Octobre 2024",
  },
  {
    id: "4",
    dates: "[12/12/2012,12/12/2012,12/12/2012]",
    group: "Groupe 04",
    deadline: "13 Octobre 2024",
  },
];

export default async function page({ params }) {
 
 
  let session=await auth()


  return (
    <div>
      <div className="flex justify-between items-center"></div>
      <div className="flex items-center gap-4">
        <Avatar className="h-[100px] w-[100px] inline-block">
          <AvatarImage
            src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
            alt="profile image"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="items-center">
          <h2 className="font-semibold text-lg">{params.name}</h2>
          <p className="px-2 text-xs font-light">{params.email}</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="items-center px-7">
        <h5 className="text-lg font-semibold ">A propos</h5>
        <p>
          Lorem ipsum dolor ipsum officiis quaerat voluptates qui voluptas
          voluptatem?
        </p>
      </div>
      <br />
      <br />
      <div className="flex px-7">
        <Tabs defaultValue={`group${groups?.[0].id}`}>
          <TabsList>
            {groups?.map(({ id, group }) => (
              <TabsTrigger
                className="px-16 text-center"
                value={`group${id}`}
                key={id}
              >
                {group}
              </TabsTrigger>
            ))}
          </TabsList>
          {groups.map((item) => (
            <TabsContent value={`group${item.id}`} key={item.id}>
              <div className="grid grid-cols-8 gap-4 bg-white p-6 rounded">
                <div className="col-span-6">
                  <CalendarComponent events={events} />
                </div>
                <div className="col-span-2">
                  <Card className="space-y-3 bg-slate-50">
                    <div className="flex gap-2 items-center flex-wrap">
                      <h2 className="font-bold text-sm">Deadline:</h2>
                      <p>{item.deadline}</p>
                    </div>
                    <br />
                    <Button asChild className="flex justify-center">
                      <Link
                        href={
                          session
                            ? `/apply/${item.id}`
                            : `/signin?source=/tutors/${params.slug}`
                        }
                      >
                        Appliquer
                      </Link>
                    </Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}{" "}
        </Tabs>
      </div>
      <br />
    </div>
  );
}
