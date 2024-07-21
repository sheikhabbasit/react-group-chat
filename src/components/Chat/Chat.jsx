import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useChatStyles } from "./useChatStyles";
import { useChatController } from "./Chat.controller";

function Chat() {
  const {
    handleMessageSend,
    messageInput,
    setMessageInput,
    endRef,
    chatId,
    chats,
    currentUser,
  } = useChatController();
  const chatStyles = useChatStyles();

  return (
    <Box sx={chatStyles.chatContainer}>
      <Box sx={chatStyles.heading}>
        <Typography variant="h4">
          {chatId ? `Group Chat ID: ${chatId}` : "No chat selected"}
        </Typography>
      </Box>
      <Box sx={chatStyles.messages}>
        {chatId ? (
          chats.map((item) => {
            return (
              <Box
                key={item.createdAt}
                sx={[
                  chatStyles.message,
                  currentUser.id === item.senderId ? chatStyles.ownMessage : {},
                ]}
              >
                {currentUser.id !== item.senderId && (
                  <img
                    src={"./avatar.png"}
                    alt="avatar"
                    style={chatStyles.senderAvatar}
                  />
                )}
                <Box sx={chatStyles.messageDetails}>
                  {currentUser.id !== item.senderId && (
                    <Typography variant="c2" sx={chatStyles.senderName}>
                      {item.senderName}
                    </Typography>
                  )}
                  <Box sx={chatStyles.messageAndTimestampContainer}>
                    <Typography variant="p1" sx={chatStyles.messageText}>
                      {item.message}
                    </Typography>
                    <Typography variant="c2" sx={chatStyles.timeStamp}>
                      {item.creaatedAt}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })
        ) : (
          <Box sx={chatStyles.emptyPlaceholder}>
            <Typography variant="h4" align="center">
              Create a Room <br /> <span style={{ fontSize: "16px" }}>Or</span>{" "}
              <br /> Join a room chat first
            </Typography>
          </Box>
        )}
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
