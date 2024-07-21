import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../lib/firebase";
import { useUserStore } from "../../lib/zustandStore";
import { useChatStore } from "../../lib/chatStore";
import { useChatModel } from "./Chat.model";
import { toast } from "react-toastify";

export const useChatController = () => {
  const { sendAMessage } = useChatModel();
  const [messageInput, setMessageInput] = useState("");
  const { currentUser } = useUserStore();
  const { chatId } = useChatStore();
  const endRef = useRef(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatId]);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "userChats", chatId || currentUser.id),
      (doc) => {
        if (doc.data()?.chats) {
          setChats(doc.data()?.chats);
        } else {
          setChats([]);
        }
      }
    );

    return () => {
      if (chatId || currentUser?.id) unsub();
    };
  }, [currentUser.id, chatId]);

  const handleMessageSend = async () => {
    if (messageInput.trim().length === 0) {
      toast.error("Please enter a message, message can't be empty.");
    }
    const res = await sendAMessage(messageInput);
    if (res) {
      setMessageInput("");
    }
  };

  return {
    messageInput,
    setMessageInput,
    handleMessageSend,
    endRef,
    chatId,
    chats,
    currentUser,
  };
};
