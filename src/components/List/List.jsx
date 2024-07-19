import React from "react";
import { useListStyles } from "./useListStyles";
import { Box } from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import ChatList from "./ChatList/ChatList";

function List() {
  const listStyles = useListStyles();
  return (
    <Box sx={listStyles.listContainer}>
      <UserInfo />
      <ChatList />
    </Box>
  );
}

export default List;
