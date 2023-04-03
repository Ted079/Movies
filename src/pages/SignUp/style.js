import {
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const StyledTextField = styled(TextField)({
  backgroundColor: "#333333",
  border: "2px solid #333333",
  maxWidth: "400px",
  borderRadius: "5px",
  position: "relative",
  "& input": {
    color: "#fff",
  },
  "&:hover, &:active": {
    border: "2px solid #fff",
  },
  ":focus": {
    border: "2px solid #fff",
  },
});

export const StyTyp = styled(Typography)({
    marginBottom:"20px",
    color: "#fff",
    textAlign:"center",
   });
