"use server";

import { auth } from "@/auth";
import _axios from "@/lib/axios-config";
import axios from "axios";

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
        console.log(err);
      });
  });
};

export const signinUser = async (body) => {
  try {
    const user = await axios.post("http://localhost:3001/auth/login", body);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const GetUserType = async () => {
  try {
    let session = await auth();
    if (!session) throw new Error("unauthorized");
    const res = await axios.get("http://localhost:3001/auth/userRole", {
      headers: {
        Authorization: session.access_token,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const singupProf = async (body) => {
  try {
    console.log("body is", body);
    const res = await axios.post(
      "http://localhost:3001/auth/signup/prof",
      body
    );
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProfId = async (body) => {
  try {
    let session = await auth();
    if (!session) throw new Error("unauthorized");
    const res = await axios.get("http://localhost:3001/auth/user/prof", {
      headers: {
        Authorization: session.access_token,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProfInfo = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/auth/profInfo/${id}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
