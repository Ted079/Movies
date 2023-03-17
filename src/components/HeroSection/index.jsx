import React from "react";
import styled from "styled-components";
import { heroImage } from "../../assets/static/imageUrl";
import { Box, Typography } from "@mui/system";
import background from "../../assets/static/login.jpg"

export default function HeroSection() {
  return (
    <Box sx={{background: "rgba(0, 0, 0, 0.5)", filter:"brightness(90%)"}}>
    <Box sx={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:"rgba(0, 0, 0, 0.5)",
      backgroundSize:"cover",
      backgroundPosition:"cover",
      height: "91vh",
      width: "100%",
      position: 'absolute',
      zIndex: 'tooltip',
    }}>
    </Box>
  </Box>
  );
}

  