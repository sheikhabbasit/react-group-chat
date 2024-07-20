import React from "react";
import { useListStyles } from "./useListStyles";
import { Box, Button } from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import ChatList from "./ChatList/ChatList";

function List() {
  const listStyles = useListStyles();
  return (
    <Box sx={listStyles.listContainer}>
      <UserInfo />
      <ChatList />
      <Box sx={listStyles.logoutContainer}>
        <Button sx={listStyles.containedButton} variant="outlined">
          Log Out
        </Button>
      </Box>
    </Box>
  );
}

export default List;
