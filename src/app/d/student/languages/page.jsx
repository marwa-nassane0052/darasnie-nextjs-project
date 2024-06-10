import React from "react";
import { cookies } from "next/headers";
import { getlangugeForStudent } from "@/actions/client/groups";
import TableComponent from "./_components/data"; // Adjust the import path as necessary

export default async function Page() {
  const data = await getlangugeForStudent();

  const cookieStore = cookies();
  const checkpoint = cookieStore.get("checkpoint")
    ? cookieStore.get("checkpoint").value
    : "/d/student/languages";

  return (
    <div>
      <TableComponent data={data} checkpoint={checkpoint} />
    </div>
  );
}
