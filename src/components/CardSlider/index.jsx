import React, { useRef, useState } from "react";
import MovieCard from "../MovieCard";
import styled from "@emotion/styled";
import { Box, Direction } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const StyledBox = styled(Box)({
  display: "flex",
  position: "relative",
});

export default function CardSlider({ data, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <NavigateNextIcon
        ></NavigateNextIcon>
        <StyledBox>
          {data.map((movie, index) => {
            return <MovieCard movieData={movie} index={index} key={movie.id} />;
          })}
        </StyledBox>
      </div>
    </div>
  );
}
