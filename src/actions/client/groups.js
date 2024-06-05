"use server"
import { data } from "autoprefixer";
import axios from "axios";
import { cookies } from "next/headers";
import _axios from "@/lib/axios-config";
import { auth } from "@/auth";

const cookieStore = cookies();

//create sesson
//ms-group
export const CreateSessionCem=async(body) =>{
    try{
      const res=await _axios.post('http://localhost:3002/session/createGroupContainerCem', body)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err.message)
    }
  }

  export const CreateSessionLycee=async(body) =>{
    try{
      const res=await _axios.post('http://localhost:3002/session/createGroupContainerLycee',body)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }
  

  //get all group conatiner
  export const getAllGroupCOntainer=async() =>{
    try{
      const res=await _axios.get('http://localhost:3006/group-container/getGroupcontainer')
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const getAllGroupContainerById=async(idGc) =>{
    try{
      const res=await _axios.get(`http://localhost:3006/group-container/getGroupcontainerwithId/${idGc}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }
   //localhost:3001/session/groupContainerForProf
  
  //get All validate group
  export const getGroupContainerForProf=async() =>{
    try{

      const res=await _axios.get(`http://localhost:3002/session/groupContainerForProf`)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //create a group
  export const addGroup=async(body,idGC) =>{
    try{
      const token=cookieStore.get('authjs.session-token')

      const res=await _axios.post(`http://localhost:3002/group/createGroup/${idGC}`,body)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group container by id
  export const getGroupContainerByid=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:3002/session/groupContainer/${idGC}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group by groupContainer for each prof
  export const getGroupsByGroupContainerId=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:3002/group/profGroup/${idGC}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get prof planing 
  export const getProfPlaning=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:3002/group/profPlaning`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

 //validate session
 export const validateSession=async(idGC) =>{
  try{
    const res=await axios.post(`http://localhost:3002/session/validateGroupContainer/${idGC}`,{
      headers:{
        Authorization:token.value
      }
    })
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const getSessionFillter=async(body) =>{
  try{
    const res=await _axios.post(`http://localhost:3006/group-container/getgc`,body)
    console.log(res.data)
    return res.data

  }catch(err){
    console.log(err)
  }
}


export const getAllTheGroupOfSession=async(idGC) =>{
  try{
    const res=await _axios.get(`http://localhost:3002/session/sessiongroups/${idGC}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//


