import { useListModel } from "./List.model";

export const useListController = () => {
  const { handleLogout } = useListModel();

  return {
    handleLogout,
  };
};
