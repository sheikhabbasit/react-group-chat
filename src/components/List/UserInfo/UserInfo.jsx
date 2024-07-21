import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useUserInfoStyles } from "./useUserInfoStyles";
import { useUserInfoController } from "./UserInfo.controller";

function UserInfo() {
  const userInfoStyles = useUserInfoStyles();
  const { name } = useUserInfoController();

  return (
    <Box sx={userInfoStyles.userInfo}>
      <Box sx={userInfoStyles.user}>
        <Box sx={userInfoStyles.avatar}>
          <Typography variant="h4">{name.slice(0, 1)}</Typography>
        </Box>
        <Typography variant="h2">{name}</Typography>
      </Box>
    </Box>
  );
}

export default UserInfo;
