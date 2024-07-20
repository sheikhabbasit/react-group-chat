import { useTheme } from "@mui/material";

export const useChatListStyles = () => {
  const theme = useTheme();
  const styles = {
    chatListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    },
    midText: {
      textAlign: "center",
    },
    containedButton: {
      padding: "10px 20px",
      fontWeight: "normal",
    },
    textField: {
      background: theme.palette.background.default,
      borderRadius: "10px",
    },
  };
  return styles;
};
