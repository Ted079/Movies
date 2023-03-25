import React, { useState } from "react";
import { firebaseAuth } from "../../utils/firebase-config";
import { signOut } from "firebase/auth";
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  InputBase,
  ListItem,
  List,
  styled,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import { StyledLink } from "../Header/style";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearchBox = styled(Box)({
  alignItems: "center",
  // width:"150px",
  borderRadius: "5px",
  paddingLeft: "10px",
  paddingTop: "3px",
  backgroundColor: "rgb(38,38,38)",
  display: "flex",
  gap: "10px",
});

const Navbar = () => {
  const links = [
    { name: "TV Series", link: "/tv" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const [open, SetOpen] = useState(false);

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h5" >
          <StyledLink>Flixster</StyledLink>
        </Typography>
        <StyledSearchBox>
          <Box>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search..."
            sx={{ color: "white" }}
          ></InputBase>
        </StyledSearchBox>

        <List sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {links.map(({ name, link }) => {
            return (
              <ListItem key={name} sx={{ width: "100px" }}>
                <StyledLink to={link}>{name}</StyledLink>
              </ListItem>
            );
          })}
        </List>

        <Button sx={{width:15}}
          color="secondary"
          onClick={() => signOut(firebaseAuth)}
        >
          <LogoutIcon fontSize="small"/>
        </Button>
        <MenuIcon
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          onClick={() => SetOpen(!open)}
        />
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 150 }}>
          {links.map(({ name, link }) => {
            return (
              <MenuItem key={name} sx={{ width: "100px" }}>
                <StyledLink sx={{ color: "black" }} to={link}>
                  {name}
                </StyledLink>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
