import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLoginStyles } from "./useLoginStyles";
import { useLoginController } from "./Login.controller";

function Login() {
  const styles = useLoginStyles();
  const { handleSubmit } = useLoginController();
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.loginContainer}>
        <Box sx={styles.formContainer}>
          <Typography variant="h3">Login</Typography>
          <form onSubmit={handleSubmit}>
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
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box sx={styles.separator} />
      <Box sx={styles.signupContainer}>
        <Typography variant="h3">Register</Typography>
        <form>
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
            <Button variant="contained" sx={styles.button}>
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
