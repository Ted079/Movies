import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import DetailsSection from "../../components/DetailsSection";
import { fetchDetails } from "../../store";
import { Container } from "../Home/style";
import Footer from "../../components/Footer";

const Details = () => {
  const { mediaType, id } = useParams();
  const dispatch = useDispatch();

  console.log(mediaType);

  useEffect(() => {
    dispatch(fetchDetails({ type: mediaType, id: id }));
  }, [dispatch, id]);

  const movieDetails = useSelector((state) => state.flixster.details);

  console.log(movieDetails);

  return (
    <Container>
      <Navbar />

      <DetailsSection movieDetails={movieDetails} />
      <hr />
      <Footer />
    </Container>
  );
};

export default Details;
