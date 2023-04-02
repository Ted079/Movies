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
  ListItem,
  List,
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
  position: "absolute",
  left: 0,
  bottom: -66,
});

const Footer = () => {
  return (
    
    <StyledBox>
      <hr/>
       <List sx={{display:"flex", color:"white"}}>
        <ListItem>Privacy</ListItem>
        <ListItem>About</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Help</ListItem>
        <ListItem>Term and Policles</ListItem>
       </List>
      {/* <BottomNavigation
        sx={{
          display: "flex",
          justifyContent: "space-around",
          bgcolor: "red"       
         }}
      >
        <BottomNavigationAction
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
      </BottomNavigation> */}
    </StyledBox>
  );
};
export default Footer;
