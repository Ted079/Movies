import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, CardMedia, ListItem, Typography, List } from "@mui/material";

const DetailsSection = ({ movieDetails }) => {
  return (
    <Box>
      <Box
        sx={{
          display: {xs: "flex-inline", sm: "flex-inline", md: "flex"},
          flexDirection:"column",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="movie"
          />
        </Box>
        <Box>
          <Typography variant="h5">{movieDetails.title}</Typography>
          <List>
            <ListItem>{movieDetails.original_language}</ListItem>
            <ListItem>{movieDetails.release_date}</ListItem>
            <ListItem>{movieDetails.tagline}</ListItem>
          </List>
          <Box>
            <Typography>{movieDetails.overview}</Typography>
          </Box>

          <Typography
            variant="subtitle2"
            textAlign={"center"}
          >
            {movieDetails.vote_average}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsSection;
