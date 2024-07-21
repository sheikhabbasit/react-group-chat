import { useUserStore } from "../../../lib/zustandStore";

export const useUserInfoController = () => {
  const { currentUser } = useUserStore();

  const name =
    currentUser?.username?.slice(0, 1).toUpperCase() +
    currentUser?.username?.slice(1);

  return { name };
};
