import { Box } from "@mui/material";
import { useChatStyles } from "./useChatStyles";

function Chat() {
  const chatStyles = useChatStyles();
  return <Box sx={chatStyles.chatContainer}>Chat</Box>;
}

export default Chat;
