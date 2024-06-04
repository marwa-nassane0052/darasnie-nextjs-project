"use server"

import axios from "axios";
import { cookies } from "next/headers";
const cookieStore = cookies();


//get forume by session id
export const getForumeBYIdSession=async(idS) =>{
    try{
      const res=await axios.get(`http://localhost:3030/forum/getForum/${idS}`)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const getAllPostOfForum=async(idF) =>{
    try{
      const res=await axios.get(`http://localhost:3030/forum/${idF}/posts`)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const createPost=async(idF,body) =>{
    try{
      const token=cookieStore.get('userToken')
      console.log(token)
      const res=await axios.post(`http://localhost:3030/forum/${idF}/posts`,body,{
        headers:{
          Authorization:token.value
        }
      })
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const getAllcommentOfPost=async(idP) =>{
    try{
      const res=await axios.get(`http://localhost:3030/forum/getcomments/${idP}`)
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  export const addComment=async(idP,body) =>{
    try{
      const token=cookieStore.get('userToken')
      console.log(token)
      const res=await axios.post(`http://localhost:3030/forum/createcomments/${idP}`,body,{
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




 