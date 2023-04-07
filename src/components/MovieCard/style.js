import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const StyledList = styled(Typography)({
  alignItems: "space-between",
});

export const StyledListItem = styled(Typography)({
  marginRight: "10px",
});

export const StyBox = styled(Box)({
  marginRight: "15px",
  paddingBottom: "30px",
  position: "relative",
});

export const CardMediaA = styled(CardMedia)({
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundSize: "cover",
  backgroundPosition: "cover",
});

export const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#000000",
});

export const MediaWrapper = styled(Box)({
  background: "rgba(0, 0, 0, 0.5)",
  position: "relative",
  zIndex: "modal",
});

export const StyledCardContent = styled(CardContent)({
  alignContent: "space-between",
  position: "absolute",
  zIndex: "tooltip",
  borderRadius: "5px",
  top: "-1vh",
  left: "0",
  width: "250px",
  height: "158px",
  background: "#181818",
  opacity: "0.8",
  boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
  transition: "4s ease-in-out",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
});

export const StyledRateBox = styled(Box)({
  border: "2px solid red",
  background: "red",
  width: "50px",
  borderRadius: "35px",
});

