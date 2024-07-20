import { Box, Button, TextField, Typography } from "@mui/material";
import { useChatListStyles } from "./useChatListStyles";
import { useChatListController } from "./ChatList.controller";

function ChatList() {
  const chatStyles = useChatListStyles();
  const { roomIdInput, setRoomIdInput } = useChatListController();

  return (
    <Box sx={chatStyles.chatListContainer}>
      <Button sx={chatStyles.containedButton} variant="contained">
        Create Room
      </Button>
      <Typography sx={chatStyles.midText} variant="p">
        Or join an existing room
      </Typography>
      <TextField
        sx={chatStyles.textField}
        placeholder="Enter chat link"
        value={roomIdInput}
        onChange={(e) => setRoomIdInput(e.target.value)}
      />
      <Button sx={chatStyles.containedButton} variant="contained">
        Join Room
      </Button>
    </Box>
  );
}

export default ChatList;
