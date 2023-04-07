import { Box, Typography, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  width: "100%",
  bgcolor: "#000000",
  opacity: "0.8",
  left: 0,
  bottom: -106,
});

export const StyledTyp = styled(Typography)({
  fontSize: "13px",
  color: "#737373",
  marginBottom: "15px",
  "&:hover": {
    color: "#fff",
  },
});

export const Wrapper = styled(Box)({
  background: "#000000",
  height: "100px",
  display: "flex",
  justifyContent: "space-around",
});
