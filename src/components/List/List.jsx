import React from "react";
import { useListStyles } from "./useListStyles";
import { Box, Button } from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import ChatList from "./ChatList/ChatList";
import { useListController } from "./List.controller";

function List() {
  const listStyles = useListStyles();
  const { handleLogout } = useListController();

  return (
    <Box sx={listStyles.listContainer}>
      <UserInfo />
      <ChatList />
      <Box sx={listStyles.logoutContainer}>
        <Button
          sx={listStyles.containedButton}
          onClick={handleLogout}
          variant="outlined"
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
}

export default List;
