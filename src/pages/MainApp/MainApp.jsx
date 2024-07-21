import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import Login from "../../components/Login/Login";
import Notifications from "../../components/Notifications/Notifications";
import { useMainAppController } from "./MainApp.controller";
import { useAppStyles } from "../../styles/useAppStyles";
import { useCommonStyles } from "../../styles/useCommonStyles";

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
