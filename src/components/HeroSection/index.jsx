import {
    Button,
    Box,
    AppBar,
    Toolbar,
    Container,
    Typography,
    
  } from "@mui/material";
  import React from "react";
  import { heroImage } from "../../assets/static/imageUrl";
  
  const HeroSection = () => {
    return (
        <Box sx={{background: "black", opacity:"0.3"}}>
          <Typography align="center" variant="h3" sx={{fontWeight: 900}}>
            Movies <b style={{color: "red"}}>Blog</b>
          </Typography>
          <Box sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor:"black",
            backgroundSize:"cover",
            backgroundPosition:"cover",
            height: 200,
            width: "100%",
          }}>
          </Box>
        </Box>
    );
  };
  
  export default HeroSection;