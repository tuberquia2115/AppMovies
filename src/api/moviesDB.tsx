import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  withCredentials: false,
  params: {
    api_key: 'a2c1052121041e76cd8e41e3579d426b',
    language: 'es-ES',
    page: '1',
  },
});

export default movieDB;