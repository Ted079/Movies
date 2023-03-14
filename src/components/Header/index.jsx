import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  
} from "@mui/material";
import React from "react";
import { LinkForNav } from "./style";

const Header = () => {
  return (
      <AppBar>
        <Container fixed>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, textDecoration: "none" }}
            >
              <LinkForNav to="/">Flixster</LinkForNav>
            </Typography>
            <Box mr={2}>
              <LinkForNav to="/login">
                <Button variant="outlined">Log in</Button>
              </LinkForNav>
            </Box>
            <Button variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;
