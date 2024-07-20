import { useTheme } from "@mui/material";

export const useListStyles = () => {
  const theme = useTheme();
  console.log(theme.palette);
  const styles = {
    listContainer: {
      flex: 0.5,
      // borderRight: `1px solid ${theme.palette.background.default}`,
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
