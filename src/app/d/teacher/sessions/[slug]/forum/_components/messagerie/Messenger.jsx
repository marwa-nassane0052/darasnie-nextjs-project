"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import io from 'socket.io-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosSend } from 'react-icons/io';
import { sendMessage, getMessagesByChatGroup, getChatGroups } from '@/actions/client/messagerie';

const socket = io('http://localhost:3030');

export default function Messenger({idS}) {
  const pathname = usePathname();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [token, setToken] = useState('');
  const [chatGroupId, setChatGroupId] = useState(null); 
  const [sessionId, setSessionId] = useState(null);


  useEffect(() => {
    if (idS) {
      async function fetchChatGroup() {
        try {
          const chatGroup = await getChatGroups(idS);
          if (chatGroup) {
            setChatGroupId(chatGroup._id);
          } else {
            console.error('No chat group found for this session');
          }
        } catch (error) {
          console.error('Error fetching chat group:', error.message);
        }
      }
      fetchChatGroup();
    }
  }, [idS]);

  useEffect(() => {
    if (chatGroupId) {
      async function fetchMessages() {
        try {
          const messages = await getMessagesByChatGroup(chatGroupId);
          setMessages(messages);
        } catch (error) {
          console.error('Error fetching messages:', error.message);
        }
      }
      fetchMessages();
    }
  }, [chatGroupId]);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSendMessage = async () => {
    if (!chatGroupId) return;
    try {
      await sendMessage(chatGroupId, newMessage);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="space-y-3">
      {idS}
      {messages.map((msg, index) => (
        <div key={index} className={`px-4 py-3 rounded-xl w-10/12 ${msg.nomuser === 'me' ? 'ml-auto bg-primary text-white' : 'bg-white'}`}>
          <p className="text-sm">{msg.contenu}</p>
          <p className="text-xs ml-auto w-fit mt-1 text-gray-300">{msg.timestamp}</p>
        </div>
      ))}
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
        <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Insérer un message" />
        
        <Button type="submit" size="icon" variant="outline" >
          <IoIosSend />
        </Button>
      </form>
    </div>
  );
}
