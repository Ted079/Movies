import { Container } from "@mui/system";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";

const StyledList = styled(Typography)({
  // alignItems: 'space-between' ,
});

const StyledListItem = styled(Typography)({
  marginRight: "10px",
});
const StyBox = styled(Box)({
  marginRight: "15px",
  paddingBottom: "50px",
});

const CardMediaA = styled(CardMedia)({
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundSize: "cover",
  backgroundPosition: "cover",
});

const styledCard = {
  width: 250,
  height: 250,
};

const MovieCard = ({ movieData }) => {
  return (
    <StyBox>
      <Card sx={styledCard}>
        <CardActionArea>
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: "tooltip",
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
              alt="moive"
              
            />
          </Box>

          <CardContent sx={{ alignContent: "space-between" }}>
            <Typography variant="subtitle2">{movieData.name}</Typography>
            <StyledList variant="subtitle3" color="secondary">
              {movieData.genres.map((genre) => (
                <StyledListItem variant="subtitle3" key={genre}>
                  {genre}
                </StyledListItem>
              ))}
            </StyledList>
          </CardContent>
        </CardActionArea>
      </Card>
    </StyBox>
  );
};

export default MovieCard;
