import React, { useEffect, useState } from 'react';
import movieDB from '../api/moviesDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';
import { ActivityIndicator, View } from 'react-native';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  toprated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    toprated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      toprated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // now_ playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
