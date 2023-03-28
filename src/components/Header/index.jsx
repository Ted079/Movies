import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  InputBase,
  styled
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink, StyledSearchBox } from "./style";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{background:"#000000",}} position="sticky">
      <StyledToolbar>
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
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
