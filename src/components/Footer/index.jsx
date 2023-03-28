import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  InputBase,
  styled,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledBox = styled(Box)({
  backgroundColor: "black",
  opacity: "0.9",
  width: "100%",
  // paddingBottom: 5,
  position: "absolute",
  left: 0,
  bottom: -65,
});

const Footer = () => {
  return (
    <StyledBox>
      {/* <Typography sx={{ color: "#737373" }}>this is footer</Typography> */}
      <BottomNavigation
        sx={{
          display: "flex",
          justifyContent: "space-around",
          bgcolor: "secondary.main"        }}
      >
        <BottomNavigationAction
          sx={{ bgcolor: "secondary.main" }}
          label="instagram"
          value="instagram"
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          label="facebook"
          value="facebook"
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          label="twitter"
          value="twitter"
          icon={<TwitterIcon />}
        />
      </BottomNavigation>
    </StyledBox>
  );
};
export default Footer;
