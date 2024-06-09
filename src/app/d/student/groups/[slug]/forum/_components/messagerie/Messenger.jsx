import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoIosSend } from 'react-icons/io';
import { sendMessage, getMessagesByChatGroup, getChatGroups } from '@/lib/api'; // Assurez-vous que ce chemin est correct

const socket = io('http://localhost:3030');  // Replace with your server URL and port

export default function Messenger() {
  const router = useRouter();
  const { sessionId } = router.query;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [token, setToken] = useState(''); // Assume token handling
  const [chatGroupId, setChatGroupId] = useState(null); 

  useEffect(() => {
    if (sessionId) {
      async function fetchChatGroup() {
        try {
          const chatGroup = await getChatGroups(sessionId);
          setChatGroupId(chatGroup._id);
        } catch (error) {
          console.error('Error fetching chat group:', error);
        }
      }
      fetchChatGroup();
    }
  }, [sessionId]);

  useEffect(() => {
    if (chatGroupId) {
      async function fetchMessages() {
        try {
          const messages = await getMessagesByChatGroup(chatGroupId);
          setMessages(messages);
        } catch (error) {
          console.error('Error fetching messages:', error);
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
      await sendMessage(chatGroupId, newMessage, token);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="space-y-3">
      {messages.map((msg, index) => (
        <div key={index} className={`px-4 py-3 rounded-xl w-10/12 ${msg.nomuser === 'me' ? 'ml-auto bg-primary text-white' : 'bg-white'}`}>
          <p className="text-sm">{msg.contenu}</p>
          <p className="text-xs ml-auto w-fit mt-1 text-gray-300">{msg.timestamp}</p>
        </div>
      ))}
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
        <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Insérer un message" />
        <Button type="submit" size="icon" variant="outline">
          <IoIosSend />
        </Button>
      </form>
    </div>
  );
}
