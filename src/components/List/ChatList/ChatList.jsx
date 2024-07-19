import { Box } from "@mui/material";
import { useChatListStyles } from "./useChatListStyles";

function ChatList() {
  const chatStyles = useChatListStyles();
  return <Box sx={chatStyles.chatListContainer}>ChatList</Box>;
}

export default ChatList;
