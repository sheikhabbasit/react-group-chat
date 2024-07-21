import MainApp from "./pages/MainApp/MainApp";
import { createTheme, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";

const App = () => {
  const currentTheme = createTheme(defaultTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
