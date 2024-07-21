import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/zustandStore";

export const useMainAppController = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  return { isLoading, currentUser };
};
