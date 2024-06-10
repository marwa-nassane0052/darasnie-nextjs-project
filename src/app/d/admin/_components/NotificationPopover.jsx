"use client"
import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AiTwotoneNotification } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { getAdminNotification } from '@/actions/client/groups';

const initialNotifications = [
  // Your initial notifications here...
];

export function NotificationPopover() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const res = await getAdminNotification();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  // Sort notifications by date in descending order
  const latestNotifications = data?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Filter unread notifications
  const unreadNotifications = latestNotifications.filter(notification => !notification.read);

  // Count unread notifications
  const unreadCount = unreadNotifications.length;

  const handleNotificationRead = (_id) => {
    const updatedNotifications = data.map(notification => {
      if (notification._id === _id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setData(updatedNotifications);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer border-[1px] rounded-lg p-[3px] relative">
          <IoIosNotificationsOutline className="w-8 h-8" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {unreadCount}
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
              {latestNotifications?.map((notification) => (
                <div key={notification._id} className={`border-b pb-2 mb-2 flex items-start gap-3 bg-white`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#d6c6f4]">
                      <AiTwotoneNotification />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="text-sm font-medium">{notification.name} {notification.familyname}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(notification.created_at).toLocaleDateString()} {new Date(notification.created_at).toLocaleTimeString()}
                    </div>
                    <div className="text-sm">{notification.notificationContent}</div>
                  </div>
                  {!notification.read && (
                    <button onClick={() => handleNotificationRead(notification._id)} className="text-green-500">
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
