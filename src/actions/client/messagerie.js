"use server"

import axios from "axios";
import { cookies } from "next/headers";
import _axios from "@/lib/axios-config";

const cookieStore = cookies();

export const createChatGroup = async (sessionId) => {
  try {
    const res = await _axios.post(`http://localhost:300/messagerie/chatgroups/${sessionId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getChatGroups = async (sessionId) => {
  try {
    const res = await _axios.get(`http://localhost:3030/messagerie/chatgroups/${sessionId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendMessage = async (chatGroupId, contenu, token) => {
  try {
    const res = await _axios.post(
      `http://localhost:3030/messagerie/messages/${chatGroupId}`,
      { contenu },
      {
        headers: {
          Authorization: token
        }
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMessagesByChatGroup = async (chatGroupId) => {
  try {
    const res = await _axios.get(`http://localhost:3030/messagerie/messages/${chatGroupId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
