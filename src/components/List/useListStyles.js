import { useTheme } from "@mui/material";

export const useListStyles = () => {
  const theme = useTheme();
  console.log(theme.palette);
  const styles = {
    listContainer: {
      borderRight: `1px solid ${theme.palette.background.default}`,
    },
  };
  return styles;
};
