import axios from 'axios';

export const getRandomMovie = async () => {
  const apiUrl = process.env.REACT_APP_MOVIE_API_URL;

  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.Search;

    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    } else {
      console.log('못찾겠음.');
      return null;
    }
  } catch (error) {
    console.error('에러 발생:', error.message); 
    return null;
  }
};
