import React,{useState,useEffect} from 'react'
import {Box,CircularProgress,useMediaQuery,Typography} from '@mui/material'
import {useSelector} from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import {MovieList}  from '..'
const Movies = () => {
const {data,error,isFetching}=useGetMoviesQuery();

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
    <MovieList movies={data}/>
    </>

  )
}

export default Movies
