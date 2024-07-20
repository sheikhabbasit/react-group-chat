import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export const useLoginModel = () => {
  const handleRegistration = async ({ username, email, password }) => {
    try {
      if (!username || !email || !password)
        return toast.error("Please fill all fields");
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        username,
        email,
        createdAt: new Date().toISOString(),
      });

      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });
      toast.success("Registration Successful, please login now");
    } catch (e) {
      toast.error(e || "Registration Failed");
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      if (!email || !password) return toast.error("Please fill all fields");
      const res = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
    } catch (e) {
      toast.error(e || "Login Failed");
    }
  };
  return {
    handleRegistration,
    handleLogin,
  };
};
