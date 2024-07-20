import { Box } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import { useAppStyles } from "../../styles/useAppStyles";
import { useCommonStyles } from "../../styles/useCommonStyles";
import Login from "../../components/Login/Login";

function MainApp() {
  const appStyles = useAppStyles();
  const commonStyles = useCommonStyles();
  const user = false;

  return (
    <Box sx={commonStyles.fullyCentered}>
      <Box sx={appStyles.appContainer}>
        {user ? (
          <>
            <List />
            <Chat />
          </>
        ) : (
          <Login />
        )}
      </Box>
    </Box>
  );
}

export default MainApp;
