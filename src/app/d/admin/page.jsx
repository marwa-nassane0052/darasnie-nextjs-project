import React from "react";
import Cards from "./_components/Cards";
import Stat from "./_components/Stat";
import Lang from "./_components/Lang";

export default function page() {
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <Cards></Cards>
      <div className="flex">
      <Stat></Stat>
      <Lang></Lang>
      </div>
    </div>
  );
}
