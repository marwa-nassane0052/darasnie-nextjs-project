"use server"
import axios from "axios";
import _axios from "@/lib/axios-config";
import { auth } from "@/auth";
import { error } from "console";

import { _fetchWithToken } from "@/lib/fetch-api";
import { _fetch } from "@/lib/fetch-api";
import { revalidatePath, revalidateTag } from "next/cache";
import { data } from "autoprefixer";
import { Rss } from "lucide-react";
//create sesson
//ms-group
//
export const CreateSessionCem=async(body) =>{
    try{
      const res=await _axios.post('http://localhost:7777/ms-group/session/createGroupContainerCem',body)
      console.log(res.data)
      return res.data
      
    }catch(err){
      return{
        success:false,
        data:err.message
      }    
    }
  }

  export const CreateSessionLycee=async(body) =>{
    try{
      const res=await _axios.post('http://localhost:7777/ms-group/session/createGroupContainerLycee',body)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }
  

  //get all group conatiner
  export const getAllGroupCOntainer=async() =>{
    try{
      let res = await _axios.get('http://localhost:7777/ms-projection/group-container/getGroupcontainer');
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const getAllGroupContainerById=async(idGc) =>{
    try{
      const res=await _axios.get(`http://localhost:7777/ms-projection/group-container/getGroupcontainerwithId/${idGc}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }
   //localhost:3001/session/groupContainerForProf
  
  //get All validate group
  export const getGroupContainerForProf=async() =>{
    try{

      let res = await _fetchWithToken('http://localhost:7777/ms-group/session/groupContainerForProf',false,{method:"GET",next:{tags:['getsession']}});
      res=await res.json()
      return{
        success:true,
        data:res
      }
    }catch(err){
      console.log(err)
    }
  }

  //create a group
  export const addGroup=async(body,idGC) =>{
    try{

      const res=await _axios.post(`http://localhost:7777/ms-group/group/createGroup/${idGC}`,body)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group container by id
  export const getGroupContainerByid=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:7777/ms-group/session/groupContainer/${idGC}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get group by groupContainer for each prof
  export const getGroupsByGroupContainerId=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:7777/ms-group/group/profGroup/${idGC}`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get prof planing 
  export const getProfPlaning=async(idGC) =>{
    try{
      const res=await _axios.get(`http://localhost:7777/ms-group/group/profPlaning`)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

 //validate session
 export const validateSession=async(idGC) =>{
  try{
    const res=await axios.post(`http://localhost:7777/ms-group/session/validateGroupContainer/${idGC}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const getSessionFillter=async(body) =>{
  try{
    const res=await _axios.post(`http://localhost:7777/ms-projection/group-container/getgc`,body)
    console.log(res.data)
    return res.data

  }catch(err){
    console.log(err)
  }
}


export const getAllTheGroupOfSession=async(idGC) =>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/session/sessiongroups/${idGC}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}

export const getAllTheGroupOfStudent=async(idGC) =>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/group/studentGroups`)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}

export const getStudentPlaning=async(idGC) =>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/group/studentPlaning`)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}

export const getUserInfo=async() =>{
  try{
    const res=await _axios.get(`http://localhost:7777/auth-service/auth/getInfoUser`)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}


export const refuseProf=async(idP) =>{
  try{
    const res=await _axios.delete(`http://localhost:7777/auth-service/auth/deleteProf/${idP}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}

export const refuseSession=async(idGC) =>{
  try{
    const res=await _axios.delete(`http://localhost:7777/ms-group/session/refuseSession/${idGC}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}


export const addStudentTOGroup=async() =>{
  try{
    const res=await _axios.post(`http://localhost:7777/ms-group/group/addStudent`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(error.message)
  }
}
//localhost:3002/group/studentGroup/666249c94de7a608979957d4
export const getAllStudentOfGroup=async(idG) =>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/group/studentGroup/${idG}`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const  uploadFile=async(body)=>{
  try{
    const res=await _axios.post(`http://localhost:7777/ms-group/document/addDocument`,body)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//document/getDocuments
export const  getFileGroup=async(idGroup)=>{
  try{
    const res=await axios.get(`http://localhost:7777/ms-group/document/getDocuments/${idGroup}`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const  getFileContent=async(path)=>{
  try{
    const res=await axios.get(`http://localhost:7777/ms-group/document/fileContent/${path}`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const  getPayemtStudent=async()=>{
  try{
    const res=await _axios.get('http://localhost:7777/ms-group/group/studentPayment')
    return res.data
  }catch(err){
    console.log(err)
  }
}

//http://localhost:7777/ms-group/group/allPayment
export const  getAllPayment=async()=>{
  try{
    const res=await _axios.get('http://localhost:7777/ms-group/group/allPayment')
    return res.data
  }catch(err){
    console.log(err)
  }
}

//appaly student
export const  applyStudent=async(body)=>{
  try{
    const res=await _axios.post('http://localhost:7777/ms-group/group/addStudent',body)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const  getGroupById=async(idG)=>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/group/groupInfo/${idG}`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//used just for test //http://localhost:7777/ms-group/group/msg
export const  testAPi=async(idG)=>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/group/msg`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//http://localhost:7777/ms-notification/session-notification/adminNotification
export const  getAdminNotification=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-notification/session-notification/adminNotification`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const addNewLangugeB=async(body)=>{
  try{
    const res=await _axios.post(`http://localhost:7777/arabeLanguage/admin/addLevel`,body)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

export const getAllLevel=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/arabeLanguage/admin/levels/all`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//localhost:8090/student/languages
export const  getlangugeForStudent=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/arabeLanguage/student/languages`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//localhost:8090/student/66658a84e8a57c2ac2318528/inscription
export const  inscriptionDansLangue=async(idL)=>{
  try{
    const res=await _axios.post(`http://localhost:7777/arabeLanguage/student/${idL}/inscription`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//localhost:8090/admin/${idL}/submissions/${idS}/upgradeLevel

//localhost:8090/student/66658bcbe8a57c2ac231852b/0/upgradeStep
export const  getStepsContet=async(idL,ns)=>{
  try{
    const res=await _axios.post(`http://localhost:7777/arabeLanguage/student/${idL}/${ns}/upgradeStep`)

    return res.data
  }catch(err){
    console.log(err)
  }
}

//localhost:8090/admin/66658bcbe8a57c2ac231852b/levels/A2
export const  getSTeps=async(idL,le)=>{
  try{
    const res=await _axios.get(`http://localhost:7777/arabeLanguage/admin/${idL}/levels/${le}`)
    return res.data
  }catch(err){
    console.log(err)
  }
}


//localhost:8090/admin/${idL}/${idLevel}/submissions
//get student list
export const  studentList=async(idL,le)=>{
  try{
    const res=await _axios.get(`http://localhost:7777/arabeLanguage/admin/${idL}/${le}/submissions`)
    return res.data
  }catch(err){
    console.log(err)
  }
}


//localhost:8090/admin/${idL}/submissions/${idS}/upgradeLevel
export const  upgradeStudent=async(idL,idS)=>{
  try{
    const res=await _axios.post(`http://localhost:7777/arabeLanguage/admin/${idL}/submissions/${idS}/upgradeLevel`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}



//get prof notification
export const  getProfNotification=async(email)=>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-notification/session-notification/profNotification/${email}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}


export const  getSessionNUmber=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/ms-group/session/sessionNumber`)
    return res.data
  }catch(err){
    console.log(err)
  }
}

//http://localhost:7777/auth-service/auth/stdeuntNumber
export const  getStudentNumber=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/auth-service/auth/stdeuntNumber`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}


export const  getProfNumber=async()=>{
  try{
    const res=await _axios.get(`http://localhost:7777/auth-service/auth/profNumber`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}