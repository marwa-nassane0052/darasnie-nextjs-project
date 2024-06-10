"use client"
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AiTwotoneNotification } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useEffect } from 'react';
import { getUserInfo } from '@/actions/client/groups';
import { getProfNotification } from '@/actions/client/groups';
import { AwardIcon } from 'lucide-react';
const initialNotifications = [
  {
    id: 1,
    user: 'TOUAHRI sara',
    content: 'crée une session.',
    date: new Date('2024-06-07T10:30:00'),
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    read: false
  },
  {
    id: 2,
    user: 'NASSANE marwa',
    content: 'crée un groupe.',
    date: new Date('2024-06-06T14:20:00'),
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    read: false
  },
  {
    id: 3,
    user: 'YAHIAOUI meriem',
    content: 'Ajouter une publication',
    date: new Date('2024-06-06T09:15:00'),
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    read: false
  },
  {
    id: 4,
    user: 'BAKKHOUCHA wafaa',
    content: 'Ajouter une publication',
    date: new Date('2024-06-05T16:45:00'),
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    read: false
  },
  {
    id: 5,
    user: 'SIDIELMRABET malak aya',
    content: 'fait un nouveau commentaire.',
    date: new Date('2024-06-05T14:30:00'),
    profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
    read: false
  },
  {
    id: 6,
    user: 'user1',
    content: 'Ajouter une publication',
    date: new Date('2024-06-05T11:25:00'),
    profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
    read: false
  },
  {
    id: 7,
    user: 'user2',
    content: 'Ajouter une publication',
    date: new Date('2024-06-04T08:20:00'),
    profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
    read: false
  },
  {
    id: 8,
    user: 'user3',
    content: 'Ajouter une publication',
    date: new Date('2024-06-04T08:20:00'),
    profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
    read: false
  }
];

export function NotificationPopover() {

  const [data, setData] = useState(initialNotifications);
  const [notificationProf,setNotificationProf]=useState([])
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const res = await getUserInfo();
        setData(res);
        const res2=await getProfNotification(res.email)
        setNotificationProf(res2)
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  const [notifications, setNotifications] = useState(initialNotifications);

  // Trier les notifications par date décroissante
  const latestNotifications = notifications.sort((a, b) => b.date - a.date);

  // Filtrer les notifications non lues
  const unreadNotifications = latestNotifications.filter(notification => !notification.read);

  // Compter les notifications non lues
  const unreadCount = unreadNotifications.length;

  const handleNotificationRead = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer border-[1px] rounded-lg p-[3px] relative">
          <IoIosNotificationsOutline className="w-8 h-8" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {notificationProf.length}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 rounded-b-xl">
        <div className="space-y-2">
          <h4 className="font-bold leading-none border-b pb-2 mb-2">Notifications</h4>
        </div>
        <ScrollArea className="max-h-80 rounded-md border">
          <div className="max-h-80 p-2">
            <div className="grid gap-2">
              {notificationProf.map((notification) => (
                <div key={notification.id} className={`border-b pb-2 mb-2 flex items-start gap-3 bg-white`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#d6c6f4]">
                      <AiTwotoneNotification />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="text-sm font-medium">{notification.familyname}</div>
                    <div className="text-xs text-gray-500">
                    {new Date(notification.created_at).toLocaleDateString()} {new Date(notification.created_at).toLocaleTimeString()}
                    </div>
                    <div className="text-sm">{notification.notificationContent}</div>
                  </div>
                  {!notification.read && (
                    <button onClick={() => handleNotificationRead(notification.id)} className="text-green-500">
                      <MdDone />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}