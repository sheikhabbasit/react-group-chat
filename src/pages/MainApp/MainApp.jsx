import { Box, CircularProgress, Typography } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import { useAppStyles } from "../../styles/useAppStyles";
import { useCommonStyles } from "../../styles/useCommonStyles";
import Login from "../../components/Login/Login";
import Notifications from "../../components/Notifications/Notifications";
import { useMainAppController } from "./MainApp.controller";

function MainApp() {
  const appStyles = useAppStyles();
  const commonStyles = useCommonStyles();
  const { isLoading, currentUser } = useMainAppController();

  return (
    <Box sx={commonStyles.fullyCentered}>
      <Box sx={appStyles.appContainer}>
        {isLoading ? (
          <Box sx={[commonStyles.fullyCentered, appStyles.loaderContainer]}>
            <CircularProgress />
            <Typography variant="h4">Loading...</Typography>
          </Box>
        ) : (
          <>
            {currentUser?.email ? (
              <>
                <List />
                <Chat />
              </>
            ) : (
              <Login />
            )}
          </>
        )}
      </Box>
      <Notifications />
    </Box>
  );
}

export default MainApp;
