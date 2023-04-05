import { color, Container } from "@mui/system";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledList = styled(Typography)({
  alignItems: "space-between",
});

const StyledListItem = styled(Typography)({
  marginRight: "10px",
});
const StyBox = styled(Box)({
  // marginTop:"30px",
  marginRight: "15px",
  paddingBottom: "30px",
  position: "relative",
});

const CardMediaA = styled(CardMedia)({
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundSize: "cover",
  backgroundPosition: "cover",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#000000",
  cursor: "cursor-pointer",
});

const styledCard = {
  width: 250,
};

const MovieCard = ({ movieData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <LinkStyled to={`/${movieData.mediaType}/${movieData.id}`}>
      <StyBox
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card sx={styledCard}>
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              position: "relative",
              zIndex: "modal",
              "&:hover": {
                filter: "brightness(85%)",
              },
            }}
          >
            <CardMediaA
              component="img"
              height="150"
              sx={{ objectFit: "cover" }}
              image={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
            />
          </Box>
        </Card>
        <Typography variant="overline" color="#fff" fontWeight={"bold"}>
          {movieData.name}
        </Typography>

        {isHovered && (
          <CardContent
            sx={{
              alignContent: "space-between",
              cursor: "context-menu",
              position: "absolute",
              zIndex: "tooltip",
              borderRadius: "5px",
              top: "-1vh",
              left: "0",
              width: "250px",
              height: "158px",
              background: "#181818",
              opacity: "0.8",
              boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
              transition: "4s ease-in-out",
              display:"flex",
              flexDirection:"column",
              justifyContent: 'center',
              gap:"8px"
            }}
          >
            <Box sx={{border:"2px solid red", background:"red",width:"50px", borderRadius:"35px"}}>
            <Typography variant="subtitle2" color="background.default" textAlign={"center"}>
              {movieData.voteAverage.toFixed(1)}
            </Typography>
            </Box>

            <StyledList variant="subtitle3" color="secondary">
              {movieData.genres.map((genre) => (
                <StyledListItem variant="subtitle3" key={genre}>
                  {genre}
                </StyledListItem>
              ))}
            </StyledList>

            <Typography variant="subtitle2" color="#fff">
              {movieData.releaseDate}
            </Typography>

            {/* <Typography>{movieData.overview}</Typography> */}
          </CardContent>
        )}
      </StyBox>
    </LinkStyled>
  );
};

export default MovieCard;
