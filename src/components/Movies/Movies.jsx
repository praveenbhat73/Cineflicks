import React,{useState,useEffect} from 'react'
import {Box,CircularProgress,useMediaQuery,Typography} from '@mui/material'
import {useSelector} from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'; 
import {MovieList,Pagination,FeaturedMovie}  from '..'
const Movies = () => {
  const[page,setPage]=useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 18: 19;
  const {genreIdOrCategoryName,searchQuery}=useSelector((state)=>state.currentGenreOrCategory);
const {data,error,isFetching}=useGetMoviesQuery({
  genreIdOrCategoryName,page,searchQuery
});

if(isFetching){
  return (
    <>
      <Box display="flex" justifyContent="center">
        <CircularProgress size="3rem"/>
      </Box>
    </>
  )
}

if(!data.results.length){
  return(
    <>
    <Box display="flex" alignItems="center" mt="20px">
      <Typography variant='h4'>
        No Movies that match that name
        <br/>
        Please search another movie
      </Typography>
    </Box>
    </>
  )
}

if (error)return 'An error occured';

  return (
    <>
    <FeaturedMovie movie={data.results[
    Math.floor(Math.random()*data.results.length-1)
    ]}/>
    <MovieList movies={data} numberOfMovies={numberOfMovies}/>
    <Pagination setPage={setPage} currentPage={page} totalPage={data.total_pages}/>
    </>

  )
}

export default Movies
