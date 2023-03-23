import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  InputBase,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink, StyledSearchBox } from "./style";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, textDecoration: "none" }}>
            <StyledLink to="/">Flixster</StyledLink>
          </Typography>
          <Box mr={2}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate(props.login ? "/login" : "/signup")}
            >
              {props.login ? "Log In" : "Sign In"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
