import { Box } from "@mui/material";
import { useUserInfoStyles } from "./useUserInfoStyles";

function UserInfo() {
  const userInfoStyles = useUserInfoStyles();
  return (
    <Box sx={userInfoStyles.userInfo}>
      <Box sx={userInfoStyles.user}>
        <img style={userInfoStyles.img} src={"./avatar.png"} alt="avatar" />
        <h2>John Doe</h2>
      </Box>
    </Box>
  );
}

export default UserInfo;
