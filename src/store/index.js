import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  details: [],
};

export const getGenres = createAsyncThunk("flixster/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  // console.log(data);
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  // console.log(array);
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        overview: movie.overview,
        mediaType: movie.media_type,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "flixster/trending",
  async ({ type }, thunkApi) => {
    const {
      flixster: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

export const fetchDetails = createAsyncThunk(
  "flixster/details",
  async ({ type, id }, thunkApi) => {
    const {
      flixster: { genres },
    } = thunkApi.getState();
    const { data } = await axios.get(
      `${TMBD_BASE_URL}/${type}/${id}?api_key=${API_KEY}`
    );
    const movieData = { ...data, genres };
    return movieData;
  }
);

export const fetchDataByGenre = createAsyncThunk(
  "flixster/moviesByGenres",
  async ({ genre, type }, thunkApi) => {
    const {
      flixster: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
      genres,
      true
    );
  }
);

export const searchMulti = async (query) => {
  try {
    const { data } = await axios.get(
      `${TMBD_BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
    );
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};


const FlixsterSlice = createSlice({
  name: "Flixster",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    flixster: FlixsterSlice.reducer,
  },
});
