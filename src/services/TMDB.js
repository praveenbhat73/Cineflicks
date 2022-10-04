import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const tmdbApiKey=process.env.REACT_APP_TMDB_KEY;
// const page=1;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1 
export const tmdbApi=createApi({
    reducerPath:'tmdbApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3'
    }),
    endpoints:(builder)=>({
        //get generes 
         getGenres:builder.query({
          query:  ()=> `/genre/movie/list?api_key=${tmdbApiKey}`
         }),
        //get movies by type
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
              // Get Movies by Search
            if (searchQuery) {
                return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
              }
      
              // Get Movies by Category
              if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
              }
      
              // Get Movies by Genre
              if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
              }
      
              // Get popular movies by default
              return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
          }),
          //*Get movies
          getMovie:builder.query({
            query:(id)=>`/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`

          }),
         
    }),
});

export const{
    useGetGenresQuery,
    useGetMoviesQuery,
    useGetMovieQuery,

}=tmdbApi;