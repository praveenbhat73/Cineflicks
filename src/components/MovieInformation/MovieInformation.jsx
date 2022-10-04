import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import useStyles from './styles';
import { MovieList } from '../index';
import { useGetMovieQuery} from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/geners';
const MovieInformation = () => {
  const classes=useStyles();
  const{id}=useParams();
  const {data,isFetching,error}=useGetMovieQuery(id);


  if(isFetching){
    return(
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="8rem"/>
    </Box>
  );
}

if(error){
  return(
  <Box display="flex" justifyContent="center" alignItems="center">
   <Link to="/">
    Something happend sorry
   </Link>
  </Box>
);
}
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item sm={12} lg={4}>
          <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
          />
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography variant="h3" align="center" gutterBottom>
            {
              data?.title
            }
            &nbsp;
            (
            {
              (
                data.release_date
              )
            }
            )
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            {
              data?.tagline
            }
           
            
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieInformation
