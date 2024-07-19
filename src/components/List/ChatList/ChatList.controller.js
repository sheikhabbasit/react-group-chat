import { useState } from "react";

export const useChatListController = () => {
  const [roomIdInput, setRoomIdInput] = useState("");

  const handleSubmit = () => {};

  return { roomIdInput, setRoomIdInput };
};
