import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/zustandStore";
import { useChatStore } from "../../lib/chatStore";

export const useListModel = () => {
  const { currentUser, clear } = useUserStore();
  const { clearChat } = useChatStore();

  const handleLogout = async () => {
    const userChatsRef = doc(db, "userChats", currentUser?.id);
    const docSnap = await getDoc(userChatsRef);
    if (docSnap?.exists()) {
      await deleteDoc(userChatsRef);
    }
    clear();
    clearChat();
    await auth.signOut();
  };

  return {
    handleLogout,
  };
};
