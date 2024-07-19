import { Box } from "@mui/material";
import { useUserInfoStyles } from "./useUserInfoStyles";

function UserInfo() {
  const userInfoStyles = useUserInfoStyles();
  return <Box sx={userInfoStyles.detailContainer}>UserInfo</Box>;
}

export default UserInfo;
