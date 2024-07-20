import { Box } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import { useAppStyles } from "../../styles/useAppStyles";
import { useCommonStyles } from "../../styles/useCommonStyles";

function MainApp() {
  const appStyles = useAppStyles();
  const commonStyles = useCommonStyles();

  return (
    <Box sx={commonStyles.fullyCentered}>
      <Box sx={appStyles.appContainer}>
        <List />
        <Chat />
      </Box>
    </Box>
  );
}

export default MainApp;
