"use server"
import _axios from "@/lib/axios-config";

export const sigupStudent = (body) => {
  return new Promise((resolve, reject) => {
    _axios
      .post("/auth/signup/student", body)
      .then(
        (res) => {
          // Data from backend
          // ==> res.data
          resolve(res.data);
        },
        (err) => {
          reject(err.message);
        }
      )
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const signinUser = async (body) => {
  try {
    let { data } = _axios.post("/auth/login", body);
    return data;
  } catch (error) {
    reject(err.message);
  }
};
