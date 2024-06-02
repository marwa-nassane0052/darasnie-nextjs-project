"use server"
import { data } from "autoprefixer";
import axios from "axios";
import { cookies } from "next/headers";
const cookieStore = cookies();

//create sesson
//ms-group
export const CreateSessionCem=async(body) =>{
    try{
      const token=cookieStore.get('userToken')
      const res=await axios.post('http://localhost:3002/session/createGroupContainerCem',body,{
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

  export const CreateSessionLycee=async(body) =>{
    try{
      const token=cookieStore.get('userToken')
      const res=await axios.post('http://localhost:3002/session/createGroupContainerLycee',body,{
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
  

  //get all group conatiner
  export const getAllGroupCOntainer=async() =>{
    try{
      const res=await axios.get('http://localhost:3006/group-container/getGroupcontainer')
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const getAllGroupContainerById=async(idGc) =>{
    try{
      const res=await axios.get(`http://localhost:3006/group-container/getGroupcontainerwithId/${idGc}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }
   //localhost:3001/session/groupContainerForProf
  
  //get All validate group
  export const getGroupContainerForProf=async() =>{
    try{
      const token=cookieStore.get('userToken')

      const res=await axios.get(`http://localhost:3002/session/groupContainerForProf`,{
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

  //create a group
  export const addGroup=async(body,idGC) =>{
    try{
      const token=cookieStore.get('userToken')

      const res=await axios.post(`http://localhost:3002/group/createGroup/${idGC}`,body,{
        headers:{
          Authorization:token.value
        }
      })
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group container by id
  export const getGroupContainerByid=async(idGC) =>{
    try{
      const res=await axios.get(`http://localhost:3002/session/groupContainer/${idGC}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group by groupContainer for each prof
  export const getGroupsByGroupContainerId=async(idGC) =>{
    try{
      const token=cookieStore.get('userToken')
      const res=await axios.get(`http://localhost:3002/group/profGroup/${idGC}`,{
        headers:{
          Authorization:token.value
        }
      })
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get prof planing 
  export const getProfPlaning=async(idGC) =>{
    try{
      const token=cookieStore.get('userToken')
      const res=await axios.get(`http://localhost:3002/group/profPlaning`,{
        headers:{
          Authorization:token.value
        }
      })
      return res.data
    }catch(err){
      console.log(err)
    }
  }

 //validate session
 export const validateSession=async(idGC) =>{
  try{
    const token=cookieStore.get('userToken')
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

//


