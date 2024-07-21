import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useLoginStyles } from "./useLoginStyles";
import { useLoginController } from "./Login.controller";

function Login() {
  const styles = useLoginStyles();
  const {
    handleLoginSubmit,
    handleRegisterSubmit,
    registrationLoading,
    isLoggingIn,
  } = useLoginController();

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.loginContainer}>
        <Box sx={styles.formContainer}>
          <Typography variant="h3">Login</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={styles.input}
              label="Email"
              type="email"
              variant="filled"
              name="email"
            />
            <TextField
              sx={styles.input}
              label="Password"
              variant="filled"
              type="password"
              name="password"
            />
            <Box sx={styles.buttonContainer}>
              <Button type="submit" variant="contained" sx={styles.button}>
                {isLoggingIn ? (
                  <CircularProgress color="secondary" size={"16px"} />
                ) : (
                  "Login"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box sx={styles.separator} />
      <Box sx={styles.signupContainer}>
        <Typography variant="h3">Register</Typography>
        <form onSubmit={handleRegisterSubmit}>
          <TextField
            sx={styles.input}
            label="Username"
            type="text"
            variant="filled"
            name="username"
          />
          <TextField
            sx={styles.input}
            label="Email"
            type="email"
            variant="filled"
            name="email"
          />
          <TextField
            sx={styles.input}
            label="Password"
            variant="filled"
            type="password"
            name="password"
          />
          <Box sx={styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              sx={styles.button}
              disabled={registrationLoading}
            >
              {registrationLoading ? (
                <CircularProgress color="secondary" size={"16px"} />
              ) : (
                "Register"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
