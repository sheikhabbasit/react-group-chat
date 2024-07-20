import { useTheme } from "@mui/material";

export const useLoginStyles = () => {
  const theme = useTheme();
  const styles = {
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    loginContainer: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      width: "50%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    separator: {
      width: "1px",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
    signupContainer: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      backgroundColor: theme.palette.background.default,
      width: "100%",
      marginBottom: "20px",
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: "50%",

      padding: "10px 20px",
    },
  };
  return styles;
};
