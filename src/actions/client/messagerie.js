import _axios from '@/lib/axios-config';
import axios from 'axios';

export const createChatGroup = async (sessionId) => {
  try {
    const res = await axios.post(`http://localhost:3030/messagerie/chatgroups/${sessionId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getChatGroups = async (sessionId) => {
  try {
    const res = await axios.get(`http://localhost:3030/messagerie/${sessionId}/chatgroups`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendMessage = async (chatGroupId, contenu) => {
  try {
    const res = await _axios.post(
      `http://localhost:3030/messagerie/messages/${chatGroupId}`,contenu
    );
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMessagesByChatGroup = async (chatGroupId) => {
  try {
    const res = await axios.get(`http://localhost:3030/messagerie/messages/${chatGroupId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
