import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import { useCommonStyles } from "./styles/useCommonStyles";
import MainApp from "./pages/MainApp/MainApp";

const App = () => {
  const currentTheme = createTheme(defaultTheme);
  const commonStyles = useCommonStyles();

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={commonStyles.fullyCentered}>
        <MainApp />
      </Box>
    </ThemeProvider>
  );
};

export default App;
