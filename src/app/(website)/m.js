"use client";


import { useState,useEffect } from "react";

import { getProfInfo,getProfId } from "@/actions/client/auth";


export default function Home() {

  

  const [data, setData] = useState();
  const [idProf, setIdprof] = useState();
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
       
        const prof=await getProfInfo("664309977aa50e5851b49905")
     
        console.log(prof)
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 

  return (
    <div>
       test
    
     
     
    </div>
  )
}
