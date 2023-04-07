import {
  Box,
  Toolbar,
  styled,
} from "@mui/material";


export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const NavLinksStyles = ({ isActive }) => {
  return {
    color: isActive ? "#f95959" : "#fff",
    textDecoration: "none",
    fontSize: "14px",
  };
};

export const StyledSearchBox = styled(Box)({
  maxWidth:"200px",
  alignItems: "center",
  marginLeft:"15px",
  borderRadius: "5px",
  paddingLeft: "10px",
  paddingTop: "3px",
  backgroundColor: "rgb(38,38,38)",
  display: "flex",
  gap: "10px",
  "& input": {
    color: "#fff",
  },
});
