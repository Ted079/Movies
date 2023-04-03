import Card from "../../components/MovieCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchDetails, fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import {Box, styled} from "@mui/material";
import { useParams } from "react-router-dom";
 

const Container = styled(Box)({
  maxWidth: "1350px",
  margin: "0 auto",
  position: "relative",
  marginTop:"90px",
})

const Details = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { id } = useParams();
  console.log(id);

  // const genresLoaded = useSelector((state) => state.flixster.genresLoaded);
  // // const movies = useSelector((state) => state.flixster.movies);
  // // const genres = useSelector((state) => state.flixster.genres);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGenres());
  // }, []);

  // useEffect(() => {
  //   if (genresLoaded) dispatch(fetchDetails({ type: "all" }));
  // }, [genresLoaded]);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

    </Container>
  );
};


export default Details;
