"use server";

import { auth } from "@/auth";
import _axios from "@/lib/axios-config";
import axios from "axios";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

//language-service

export const CreateLanguage = async (body) => {
    try {
      const res = await axios.post('http://localhost:7777/arabeLanguage/admin/addLevel', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };


//get submissions
export const getSubmissions=async(idLang , levelName) =>{
    try{
      let res = await _axios.get(`http://localhost:7777/arabeLanguage/admin/${idLang}/${levelName}/submissions`);
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get liste of levels 
  export const getLevels=async() =>{
    try{
      let res = await _axios.get('http://localhost:7777/arabeLanguage/admin/levels/all');
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  //get level
  export const getLevel=async(idLang, levelName) =>{
    try{
      let res = await _axios.get(`http://localhost:7777/arabeLanguage/admin/${idLang}/levels/${levelName}`);
      console.log(res.data)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  // update level
  export const updateLevel = async (body , idLang , levelName) => {
    try {
      const res = await _axios.put(`http://localhost:7777/arabeLanguage/admin/${idLang}/levels/${levelName}/update`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  // upgrade Student
  export const upGradeStudent = async (idLang , idStudent) => {
    try {
        let res = await _axios.post(`http://localhost:7777/arabeLanguage/admin/${idLang}/submissions/${idStudent}/upgradeLevel`);
        console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };