import Card from "../../components/MovieCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
// import { fetchDetails, fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import { Box, Typography, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import DetailsSection from "../../components/DetailsSection";

const Container = styled(Box)({
  maxWidth: "1350px",
  margin: "0 auto",
  position: "relative",
  marginTop: "90px",
});

const Details = ({ data }) => {
  // const dispatch = useDispatch();
  // const details = useSelector((state) => state.flixster.details);

  // useEffect(() => {
  //   dispatch(fetchDetails({}));
  // }, []);
  return (
    <Container>
      <Navbar />
      {/* {details.map((movie) => {
        return <DetailsSection key={movie.id} {...movie}/>;
      })} */}

      <DetailsSection/>
    </Container>
  );
};

export default Details;
