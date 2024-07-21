import { useTheme } from "@mui/material";

export const useListStyles = () => {
  const theme = useTheme();
  const styles = {
    listContainer: {
      flex: 0.5,
    },
    logoutContainer: {
      width: "92%",
      margin: "auto",
    },
    containedButton: {
      padding: "10px 20px",
      width: "100%",
      color: theme.palette.text.white,
    },
  };
  return styles;
};
