import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/zustandStore";

export const useChatModel = () => {
  const { chatId } = useChatStore();
  const { currentUser } = useUserStore();
  const sendAMessage = async (e) => {
    try {
      const userChatsRef = doc(db, "userChats", chatId);
      await updateDoc(userChatsRef, {
        chats: arrayUnion({
          message: e,
          senderId: currentUser.id,
          createdAt: new Date(),
          senderName: currentUser.username,
        }),
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  return { sendAMessage };
};
