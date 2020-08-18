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

    const imgUrl = "https://image.tmdb.org/t/p/original/";
    const formateData = data["results"].map((indice) => ({
      id: indice["id"],
      photos: imgUrl + indice["backdrop_path"],
      title: indice["title"],
    }));

    return formateData;
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

export const dataTopMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const imgUrl = "https://image.tmdb.org/t/p/original/";
    const formatData = data["results"].map((indice) => ({
      id: indice["id"],
      title: indice["title"],
      photos: imgUrl + indice["poster_path"],
      vote: indice["vote_average"],
    }));

    return formatData;
  } catch (error) {
    console.log(error);
  }
};

export const dataMovieUpComming = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    const imgUrl = "https://image.tmdb.org/t/p/original/";
    const formateData = data["results"].map((indice) => ({
      id: indice["id"],
      title: indice["title"],
      images: imgUrl + indice["poster_path"],
    }));

    return formateData;
  } catch (error) {
    console.log(error);
  }
};

export const dataSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    const imgUrl = "https://image.tmdb.org/t/p/original/";
    const formateData = data["results"].map((indice) => ({
      id: indice["id"],
      title: indice["title"],
      photos: imgUrl + indice["poster_path"],
    }));

    return formateData;
  } catch (error) {
    console.log(error);
  }
};
