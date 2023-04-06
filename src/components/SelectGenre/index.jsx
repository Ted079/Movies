import { Button, FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
         <InputLabel id="demo-simple-select-label">Select genre</InputLabel>
      <Select  label="Select the genre"
        onChange={(event) => {
          dispatch(
            fetchDataByGenre({
              genres,
              genre: event.target.value,
              type,
            })
          );
        }}
      >
        {genres.map((genre) => {
          return (
            <MenuItem sx={{color:"#000000"}} value={genre.id} key={genre.id}>
              {genre.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};


export default SelectGenre;
