import { useTheme } from "@mui/material";

export const useChatStyles = () => {
  const theme = useTheme();
  const styles = {
    chatContainer: {
      flex: 2,
      backgroundColor: theme.palette.background.default,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      padding: "20px",
      backgroundColor: theme.palette.primary.main,
    },
    messages: {
      marginBottom: "100px",
      overflowY: "scroll",
    },
    message: {
      padding: "20px",
      display: "flex",
    },
    ownMessage: {
      flexDirection: "row-reverse",
    },
    messageDetails: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
    },
    senderName: {
      color: theme.palette.text.dark,
    },
    senderAvatar: {
      height: "45px",
      width: "45px",
      borderRadius: "50%",
      marginRight: "20px",
    },
    messageText: {
      color: theme.palette.text.main,
    },
    messageAndTimestampContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      maxWidth: "500px",
      minWidth: "100px",
    },
    timeStamp: {
      color: theme.palette.text.dark,
      marginLeft: "1rem",
      marginBottom: "3px",
      opacity: "0.7",
    },
    messageBox: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "20px",
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-between",
      borderTop: `1px solid ${theme.palette.primary.main}`,
    },
    input: {
      width: "90%",
      borderRadius: "10px",
      background: theme.palette.background.default,
    },
    button: {
      width: "8%",
    },
    emptyPlaceholder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "500px",
      width: "100%",
      paddingTop: "100px",
      color: theme.palette.text.dark,
    },
  };
  return styles;
};
