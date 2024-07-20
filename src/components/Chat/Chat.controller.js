import { useEffect, useRef, useState } from "react";

export const useChatController = () => {
  const [messageInput, setMessageInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const handleMessageSend = () => {};

  return {
    messageInput,
    setMessageInput,
    handleMessageSend,
    endRef,
  };
};
