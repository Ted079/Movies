import { Box } from "@mui/material";
import React from "react";
import { StyledBox, StyledTyp, Wrapper } from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <StyledBox
      sx={{
        position: { sx: "static", sm: "static", md: "absolute" },
      }}
    >
      <Wrapper
        sx={{
          padding: { xs: "0px px", sm: "0px 30px ", md: "30px 90px" },
        }}
      >
        <Box>
          <StyledTyp>FAQ</StyledTyp>
          <StyledTyp>Contact us.</StyledTyp>
        </Box>
        <Box>
          <StyledTyp>Help Center.</StyledTyp>
          <StyledTyp>Corporate Information</StyledTyp>
        </Box>
        <Box>
          <StyledTyp>Privacy</StyledTyp>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex ", md: "flex" } }}>
          <StyledTyp>Terms of Use</StyledTyp>
        </Box>
      </Wrapper>
    </StyledBox>
  );
};
export default Footer;
