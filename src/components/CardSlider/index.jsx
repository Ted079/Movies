import React, { useRef, useState } from "react";
import MovieCard from "../MovieCard";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@mui/system";

const StyledBox = styled(Box)({
  marginLeft: "90px",
  paddingRight: "40px",
});



export default function CardSlider({ data, title }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 4,
    },
    tabletx: {
      breakpoint: { max: 720, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <StyledBox>
      <h1>{title}</h1>
      <Carousel responsive={responsive}>
        {data.map((movie, index) => {
          return <MovieCard movieData={movie} index={index} key={movie.id} />;
        })}
      </Carousel>
    </StyledBox>
  );
}
