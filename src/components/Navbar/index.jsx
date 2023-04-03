import React, { useState } from "react";
import { firebaseAuth } from "../../utils/firebase-config";
import { signOut } from "firebase/auth";
import {
  Button,
  Box,
  AppBar,
  Typography,
  InputBase,
  ListItem,
  List,
  Menu,
  MenuItem,
} from "@mui/material";
import { StyledLink } from "../Header/style";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavLinksStyles } from "./style";
import { StyledToolbar } from "./style";
import { StyledSearchBox } from "./style";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TVSeries", link: "/tv" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const [open, SetOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h5">
          <StyledLink>Flixster</StyledLink>
        </Typography>

        <List
          sx={{
            width: "100px",
            display: { xs: "none", sm: "none", md: "flex" },
            textColor: "inherit",
            marginRight: "99px",
          }}
        >
          {links.map(({ name, link }) => {
            return (
              <ListItem key={name}>
                <NavLink style={NavLinksStyles} to={link}>
                  {name}
                </NavLink>
              </ListItem>
            );
          })}
        </List>

        <StyledSearchBox>
          <Box>
            <SearchIcon />
          </Box>
          {/* <form> */}
          <InputBase
            placeholder="Search..."
            onChange={onHandleChange}
            value={inputValue}
          />
          {/* </form> */}
        </StyledSearchBox>

        <Button
          sx={{ width: 100, color: "white" }}
          variant="outlined"
          onClick={() => signOut(firebaseAuth)}
        >
          <LogoutIcon fontSize="small" />
          {/* Log Out */}
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
              <MenuItem key={name}>
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
