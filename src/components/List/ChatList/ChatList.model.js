import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/zustandStore";
import { useChatStore } from "../../../lib/chatStore";

export const useChatListModel = () => {
  const { currentUser } = useUserStore();
  const { activeChatId } = useChatStore();

  const createGroupChat = async () => {
    try {
      const userChatsRef = doc(db, "userChats", currentUser.id);
      await setDoc(userChatsRef, {
        chats: [],
      });
      activeChatId(currentUser.id);
      return true;
    } catch (e) {
      return false;
    }
  };

  const joinARoom = async (e) => {
    try {
      const chatRef = doc(db, "userChats", e);
      const docSnap = await getDoc(chatRef);
      if (docSnap.exists()) {
        activeChatId(e);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  return { createGroupChat, joinARoom };
};
