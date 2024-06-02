"use server"
import _axios from "@/lib/axios-config";
import axios from "axios";
import { AwardIcon } from "lucide-react";
import { cookies } from "next/headers";
const cookieStore = cookies();

//auth-service

export const sigupStudent = (body) => {
  return new Promise((resolve, reject) => {
    _axios
      .post("http://localhost:3001/auth/signup/student", body)
      .then(
        (res) => {
          // Data from backend
          // ==> res.data
        },
        (err) => {
          reject(err.message);
        }
      )
      .catch((err) => {
        console.log(err)
      });
  });
};



export const signinUser = async (body) => {
  try{
    const res= await axios.post("http://localhost:3001/auth/login",body)
    cookies().set('userToken',res.data.token);

  }catch(err){
    console.log(err)
  }

};

export const GetUserType=async() =>{
  try{
    const token=cookieStore.get('userToken')
    const res=await axios.get('http://localhost:3001/auth/userRole',{
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

export const LogOut=async()=>{
  try{
   cookies().delete('userToken')
  }catch(err){
    console.log(err)
  }
}

export const singupProf = async (body) => {
  try{
    console.log('body is',body)
    const res=await axios.post("http://localhost:3001/auth/signup/prof",body)
    console.log(res)
    return res.data
  }catch(err){
    console.log(err)
  }
};


export const getProfId = async (body) => {
  try{
    const token=cookieStore.get('userToken')

    const res=await axios.get('http://localhost:3001/auth/user/prof',{
      headers:{
        Authorization:token.value
      }
    })
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
};


export const getProfInfo=async(id) =>{
  try{
    const token=cookieStore.get('userToken')
    const res=await axios.get(`http://localhost:3001/auth/profInfo/${id}`)
    console.log(res.data)
    return res.data
  }catch(err){
    console.log(err)
  }
}