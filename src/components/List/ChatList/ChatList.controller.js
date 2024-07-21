import { useEffect, useState } from "react";
import { useUserStore } from "../../../lib/zustandStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatListModel } from "./ChatList.model";
import { toast } from "react-toastify";
import { useChatStore } from "../../../lib/chatStore";

export const useChatListController = () => {
  const { currentUser } = useUserStore();
  const { chatId, clearChat } = useChatStore();
  const { createGroupChat, joinARoom } = useChatListModel();
  const [roomIdInput, setRoomIdInput] = useState("");
  const [chats, setChats] = useState([]);
  const [groupChatCreated, setGroupChatCreated] = useState(false);

  const createGroupChatOnClick = async () => {
    const res = await createGroupChat();
    if (res) {
      setGroupChatCreated(true);
    }
  };

  const handleJoinRoom = async () => {
    if (roomIdInput.trim().length === 0) {
      toast.error("Please enter a room id, room id can't be empty.");
    }
    const res = await joinARoom(roomIdInput);
    if (res) {
      setGroupChatCreated(true);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.id), (doc) => {
      if (doc?.data()?.chats) {
        setChats(doc.data().chats);
      } else {
        setChats([]);
      }
    });

    return () => {
      unsub();
    };
  }, [currentUser.id]);

  const escapeChat = () => {
    setGroupChatCreated(false);
    setRoomIdInput("");
    setChats([]);
    clearChat();
  };

  return {
    roomIdInput,
    setRoomIdInput,
    chats,
    createGroupChatOnClick,
    handleJoinRoom,
    groupChatCreated,
    chatId,
    escapeChat,
    currentUser,
  };
};
