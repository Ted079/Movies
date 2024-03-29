import MovieCard from "../MovieCard";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Footer from "../Footer";

export default function CardSlider({ data, title }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 3,
    },
    tabletx: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        margingRight: "40px",
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        color="#fff"
        fontWeight={"bold"}
        sx={{ marginBottom: "5px" }}
      >
        {title}
      </Typography>
      <Carousel responsive={responsive}>
        {data.map((movie, index) => {
          return <MovieCard movieData={movie} index={index} key={movie.id} />;
        })}
      </Carousel>
    </Box>
  );
}
