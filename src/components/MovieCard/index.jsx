import { Container } from "@mui/system";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";

const StyledList = styled(List)({
  color: "black",
  display:"flex",
  marginLeft:-16,
});

const StyledListItem = styled(ListItem)({
  background: "red",
 
});


const MovieCard = ({ movieData }) => {
  return (
    <Card sx={{ maxWidth: 211 }}>
      <CardActionArea>
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.5)",
            filter: "brightness(80%)",
            zIndex: "tooltip",
          }}
        >
          <CardMedia
            component="img"
            height="314"
            image={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            alt="moive"
          />
        </Box>

        <CardContent>
          <Typography>{movieData.name}</Typography>
          
          <StyledList> 
          {movieData.genres.map((genre)=> (
            <StyledListItem  key={genre}>{genre}</StyledListItem>
          ))}
          </StyledList>
        </CardContent>
      </CardActionArea>
    </Card>

    // <Container>
    // <img src={`https://image.tmdb.org/t/p/w300${movieData.image}`} alt="moive" />
    // </Container>
  );
};

export default MovieCard;
