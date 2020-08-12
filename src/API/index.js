import axios from "axios";

const apiKey = "03fa83b97819a7cd7f82b600399cb6d4";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const movieUrl = `${url}/movie`;

export const dataMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((indice) => ({
      id: indice["id"],
      photos: posterUrl + indice["backdrop_path"],
      title: indice["title"],
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const dataMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const dataMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data["results"][0];
  } catch (error) {
    console.log(error);
  }
};
