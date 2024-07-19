import { Box } from "@mui/material";
import React from "react";
import { useDetailStyles } from "./useDetailStyles";

function Detail() {
  const detailStyles = useDetailStyles();
  return <Box sx={detailStyles.detailContainer}>Detail</Box>;
}

export default Detail;
