import React from "react";
import { Box, Typography } from "@mui/system";
import background from "../../assets/static/login12.jpg"

export default function LoginBackground() {
  return (
    <Box sx={{background: "rgba(0, 0, 0, 0.5)", filter:"brightness(70%)"}}>
    <Box sx={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:"rgba(0, 0, 0, 0.5)",
      backgroundSize:"cover",
      height: "100vh",
      width: "100%",
      position: 'absolute',
      zIndex: 'tooltip',
      display:{xs:"none", sm:"flex" , md:"flex"}
    }}>
    </Box>
  </Box>
  );
}
