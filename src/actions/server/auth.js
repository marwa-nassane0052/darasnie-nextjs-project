"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function verifyEmail(token) {
  try {
    let { data } = await axios.post(
      "http://localhost:5000/auth/verify",
      {},
      { headers: { Authorization: token } }
    );
    redirect("/signin");
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
    redirect("/dashboard");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return "Invalid Credentials";
  }
}
