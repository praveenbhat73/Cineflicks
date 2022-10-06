import React,{useState,useEffect} from 'react'
import { Modal, Typography, Button,  Grid, Box, CircularProgress } from '@mui/material';
import { Movie as MovieIcon, ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams,Link } from 'react-router-dom';
import useStyles from './style.js';
import { useGetActorQuery,useGetMoviesByActorIdQuery } from '../../services/TMDB';
// import { ClassNames } from '@emotion/react';
import {MovieList, Pagination}  from '..';


const Actors = () => {
  const classes=useStyles();
  const[page,setPage]=useState(1);
  const{id}=useParams();
  const{data,isFetching,error}=useGetActorQuery(id);
  const{data:movies}=useGetMoviesByActorIdQuery({id,page});
  const navigate = useNavigate();
  // console.log(data);
  if(isFetching){
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress size="6rem"/>
        </Box>
      </>
    )
  }
  if(error)
  {
    return(
      <>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to ='/'>
            Something happend sorry
          </Link>
        </Box>
      </>
    )
  }
  return (
    <div>
    <Grid container className={classes.container} >
        <Grid item lg={4} sm={12}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>


        <Grid item container  lg={7} style={{ display: 'flex', justifyContent: 'center', gap:'5px', flexDirection: 'column' }} className={classes.container} direction="column" >

          <Typography variant="h1"  color="darkblack"  gutterBottom fontFamily="Helvetica Neue">{data?.name}</Typography>

          <Typography variant="h5" color="lightblack" gutterBottom fontFamily="Helvetica Neue">
          
          🎂Born:{
          data?.birthday
          }
          </Typography>

          <Typography variant="h5" fontSize="18px" align="left" paragraph fontFamily="Roboto">{data?.biography || 'Sorry, no biography yet...'}</Typography>

          <Box className={classes.btns}>
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="5rem"
      width="100%">
        <Typography variant='h3' gutterBottom align='center' color="gray" textTransform="uppercase" fontFamily="Helvetica Neue">
          📽️Movies
        </Typography>
          {/* loop through films of actor  */}
        {
          movies && <MovieList movies={movies} numberofMovies={10}/>
        
        }
      </Box>
        <Pagination setPage={setPage} currentPage={page} totalPage={movies?.total_pages}/>
    </div>
  )
}

export default Actors
