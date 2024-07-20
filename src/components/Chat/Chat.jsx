import { Box, Button, TextField, Typography } from "@mui/material";
import { useChatStyles } from "./useChatStyles";
import { useChatController } from "./Chat.controller";
import { useState } from "react";

function Chat() {
  const { handleMessageSend, messageInput, setMessageInput, endRef } =
    useChatController();
  const chatStyles = useChatStyles();
  const [isOwnMessage] = useState(false);

  return (
    <Box sx={chatStyles.chatContainer}>
      <Box sx={chatStyles.heading}>
        <Typography variant="h4">Group Chat ID</Typography>
      </Box>
      <Box sx={chatStyles.messages}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 3, 3, 3, 3].map((item, index) => {
          return (
            <Box
              key={index}
              sx={[
                chatStyles.message,
                isOwnMessage ? chatStyles.ownMessage : {},
              ]}
            >
              {!isOwnMessage && (
                <img
                  src={"./avatar.png"}
                  alt="avatar"
                  style={chatStyles.senderAvatar}
                />
              )}
              <Box sx={chatStyles.messageDetails}>
                {!isOwnMessage && (
                  <Typography variant="c2" sx={chatStyles.senderName}>
                    Sender Name
                  </Typography>
                )}
                <Box sx={chatStyles.messageAndTimestampContainer}>
                  <Typography variant="p1" sx={chatStyles.messageText}>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                    Hello Hello Hello Hello Hello Hello
                  </Typography>
                  <Typography variant="c2" sx={chatStyles.timeStamp}>
                    Wed 19:01
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box ref={endRef}></Box>
      </Box>
      <Box sx={chatStyles.messageBox}>
        <TextField
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          sx={chatStyles.input}
          placeholder="Type your message here..."
        />
        <Button
          sx={chatStyles.button}
          variant="contained"
          onClick={handleMessageSend}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Chat;
