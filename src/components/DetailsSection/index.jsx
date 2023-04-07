import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
} from "@mui/material";
import { StyledListItem, Span } from "./style";

const DetailsSection = ({ movieDetails }) => {


  return (
    <Box
      sx={{
        display: {
          xs: "flex-inline",
          sm: "flex-inline",
          md: "flex",
          lg: "flex",
        },
        maxWidth: "1200px",
        gap: "90px",
        paddingTop: { xs: "0", sm: "10px", md: "10px", lg: "10px" },
        justifyContent: { xs: "center", sm: "center", md: "center", lg: "" },
      }}
    >
      <Box>
        <Box
          component="img"
          sx={{
            maxWidth: { xs: "300px", sm: "334px", md: "334px", lg: "334px" },
            objectFit: "cover",
            marginRight: { xs: "20px", sm: "0", md: "0", lg: "0" },
            marginBottom: "30px",
            height: { xs: "300px", sm: "500px", md: "500px", lg: "500px" },
          }}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt="movie"
        />
      </Box>
      <Box>
        <Typography fontWeight={"bold"} variant="h4">
          {`${movieDetails.title || movieDetails.original_name}`}
        </Typography>
        <List sx={{ position: "relative", right: "10px" }}>
          <StyledListItem sx={{ color: "#DF2E38" }}>
            <Span>Tagline:</Span>
            {movieDetails.tagline}
          </StyledListItem>
          <StyledListItem>
            {" "}
            <Span>Language: </Span> English 
            {/* {movieDetails.original_language} */}
          </StyledListItem>

          <StyledListItem>
            <Span>Release Date:</Span> {`${movieDetails.release_date || (movieDetails.last_air_date) } `}
          </StyledListItem>
          <StyledListItem>
            <Span>Rate:</Span>{" "}
            <Box
              sx={{
                border: "2px solid red",
                background: "red",
                width: "50px",
                borderRadius: "35px",
                textAlign:"center",
                color:"#000000",
                fontWeight:"bold"
              }}
            >
              {movieDetails.vote_average}
            </Box>
          </StyledListItem>
        </List>

        <Box sx={{ marginBottom: "80px" }}>
          <Typography sx={{ lineHeight: "2" }} fontWeight={"bold"} variant="h5">
            Overview:
          </Typography>
          <Typography sx={{ lineHeight: "2" }}>
            {movieDetails.overview}
          </Typography>
        </Box>

        {/* <List variant="subtitle3" color="secondary">
          {movieDetails.created_by.map((name) => (
            <ListItem variant="subtitle3" key={name.id}>
              {name.name}
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Box>
  );
};

export default DetailsSection;
