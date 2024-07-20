import React from "react";
import Box from "@mui/material/Box";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notifications() {
  return (
    <Box>
      <ToastContainer position="top-right" />
    </Box>
  );
}

export default Notifications;
