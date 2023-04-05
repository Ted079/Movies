import React from "react";
import { useParams } from "react-router-dom";

function DetailsSection() {
  const { mediaType, id, image, overview, releaseDate, genres,name } = useParams();
  //   const {data, loading} = useFetch(`/${mediaType}/${id}`);

  console.log(overview);
  return (
    <div>
      <h3>{name}</h3>
      <h3>{releaseDate}</h3>
      <h2>{id}</h2>
    </div>
  );
}

export default DetailsSection;
