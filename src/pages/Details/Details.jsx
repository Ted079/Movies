import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import DetailsSection from "../../components/DetailsSection";
import { fetchDetails } from "../../store";
import { Container } from "../Home/style";
import Footer from "../../components/Footer";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails({ type: "movie", id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchDetails({ type: "tv", id: id }));
  }, [dispatch, id]);

  const movieDetails = useSelector((state) => state.flixster.movies);

  console.log(movieDetails);

  return (
    <Container>
      <Navbar />

      <DetailsSection movieDetails={movieDetails} />
    </Container>
  );
};

export default Details;
