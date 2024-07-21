export const useUserInfoStyles = () => {
  const styles = {
    userInfo: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    user: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      color: "white",
    },
  };
  return styles;
};
