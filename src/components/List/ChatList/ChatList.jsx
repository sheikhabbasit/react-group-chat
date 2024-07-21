import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useChatListStyles } from "./useChatListStyles";
import { useChatListController } from "./ChatList.controller";

function ChatList() {
  const chatStyles = useChatListStyles();
  const {
    roomIdInput,
    setRoomIdInput,
    createGroupChatOnClick,
    groupChatCreated,
    chatId,
    handleJoinRoom,
    escapeChat,
    currentUser,
  } = useChatListController();

  return (
    <Box sx={chatStyles.chatListContainer}>
      {!groupChatCreated ? (
        <>
          <Button
            sx={chatStyles.containedButton}
            onClick={createGroupChatOnClick}
            variant="contained"
          >
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
          <Button
            sx={chatStyles.containedButton}
            variant="contained"
            onClick={handleJoinRoom}
          >
            Join Room
          </Button>
        </>
      ) : (
        <>
          <Typography sx={chatStyles.midText} variant="h5">
            {`Invite your friends to join the room by pasting this text in their
            text box`}
            <br />
            <br />
            <br />
            {`"${chatId}"`}
          </Typography>
          {chatId !== currentUser.id && (
            <Button
              sx={chatStyles.containedButton}
              onClick={escapeChat}
              variant="contained"
            >
              Escape Chat
            </Button>
          )}
        </>
      )}
    </Box>
  );
}

export default ChatList;
