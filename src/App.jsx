import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import { useCommonStyles } from "./styles/useCommonStyles";
import { useAppStyles } from "./styles/useAppStyles";

const App = () => {
  const currentTheme = createTheme(defaultTheme);
  const commonStyles = useCommonStyles();
  const appStyles = useAppStyles();

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={[commonStyles.fullyCentered, appStyles.appContainer]}>
        <Typography variant="h1">React Firebase Chat</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
