import React from "react";
import { Box } from "@mui/system";
import background from "../../assets/static/login3.jpg";

export default function LoginBackground() {
  return (
    <Box sx={{ background: "rgba(0, 0, 0, 0.5)", filter: "brightness(100%)" }}>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          height: "88vh",
          width: "100%",
          position: "absolute",
          zIndex: "tooltip",
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      ></Box>
    </Box>
  );
}
