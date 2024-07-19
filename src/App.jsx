import { createTheme, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/defaultTheme";
import MainApp from "./pages/MainApp/MainApp";

const App = () => {
  const currentTheme = createTheme(defaultTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
