import { Container } from "@mui/system";
import styled from "styled-components";

const Card = ({movieData}) => {
  return (
    <Container>
    <img src={`https://image.tmdb.org/t/p/w300${movieData.image}`} alt="moive" />
    </Container>
  );
};

export default Card;