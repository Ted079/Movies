import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  ListItem,
  Typography,
  List,
  styled,
} from "@mui/material";

const DetailsSection = ({ movieDetails }) => {
  const StyledListItem = styled(ListItem)({
    display: "flex",
    gap: "10px",
  });

  const Span = styled(Box)({
    display: "flex",
    fontSize: "14px",
    width: "100px",
    color: "#6d6c6c",
  });

  return (
    <Box
      sx={{
        display: {
          xs: "flex-inline",
          sm: "flex-inline",
          md: "flex-inline",
          lg: "flex",
        },
        gap: "90px",
        maxWidth: "1200px",
        paddingTop: "30px",
        justifyContent: { xs: "center", sm: "center", md: "", lg: "" },
      }}
    >
      <Box>
        <Box
          component="img"
          sx={{
            maxWidth:{xs: "300px", sm: "500px", md: "500px", lg: "500px"},
            objectFit: "cover",
            marginRight: { xs: "20px", sm: "100px", md: "100px", lg: "0" },
            marginBottom:"30px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt="movie"
        />
      </Box>
      <Box>
        <Typography fontWeight={"bold"} variant="h4">
          {movieDetails.title}
        </Typography>
        <List>
          <StyledListItem sx={{ color: "#DF2E38" }}>
            <Span>Tagline:</Span>
            {movieDetails.tagline}
          </StyledListItem>
          <StyledListItem>
            {" "}
            <Span>Language: </Span> {movieDetails.original_language}
          </StyledListItem>
          <StyledListItem>
            <Span>Release Date:</Span> {movieDetails.release_date}
          </StyledListItem>
          <StyledListItem>
            <Span>Rate:</Span> {movieDetails.vote_average}
          </StyledListItem>
        </List>

        <Box>
          <Typography sx={{ lineHeight: "2" }} fontWeight={"bold"} variant="h5">
            Overview:
          </Typography>
          <Typography sx={{ lineHeight: "2" }}>
            {movieDetails.overview}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsSection;
