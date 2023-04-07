import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  StyledList,
  CardMediaA,
  LinkStyled,
  MediaWrapper,
  StyledCardContent,
  StyledRateBox,
  StyledListItem,
  StyBox,
} from "./style";

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
          <MediaWrapper>
            <CardMediaA
              component="img"
              height="150"
              sx={{ objectFit: "cover" }}
              image={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
            />
          </MediaWrapper>
        </Card>
        <Typography variant="caption" color="#d6d6d6">
          {movieData.name}
        </Typography>

        {isHovered && (
          <StyledCardContent>
            <StyledRateBox>
              <Typography
                variant="subtitle2"
                color="background.default"
                textAlign={"center"}
              >
                {movieData.voteAverage.toFixed(1)}
              </Typography>
            </StyledRateBox>

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
          </StyledCardContent>
        )}
      </StyBox>
    </LinkStyled>
  );
};

export default MovieCard;
