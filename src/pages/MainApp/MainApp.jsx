import { Box } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import Detail from "../../components/Detail/Detail";
import List from "../../components/List/List";
import { useAppStyles } from "../../styles/useAppStyles";

function MainApp() {
  const appStyles = useAppStyles();
  return (
    <Box sx={appStyles.appContainer}>
      <List />
      <Chat />
      <Detail />
    </Box>
  );
}

export default MainApp;
