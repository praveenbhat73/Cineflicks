import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


import useStyles from './styles';
import { MovieList } from '..';
import { useGetMovieQuery,useGetRecommendationsQuery,useGetListQuery} from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/geners';
import { userSelector } from '../../features/auth';


const MovieInformation = () => {
  const {user}=useSelector(userSelector);
  const{id}=useParams();
  const classes=useStyles();
  const dispatch = useDispatch();
  const[open,setOpen]=useState(false);
  
  

  const {data,isFetching,error}=useGetMovieQuery(id);

  const {data:recommendations,isFetching:isrecommendation}=useGetRecommendationsQuery({
    list:'/recommendations',movie_id:id
  });

  const { data: favoriteMovies } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  const[isMoviesFavorites,setisMovieFavorites]=useState(false);
  // console.log(data);
  const[isMoviesWatchlist,setisMovieWatchlist]=useState(false);  


  useEffect(() => {
    setisMovieFavorites(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [favoriteMovies, data]);
  useEffect(() => {
    setisMovieWatchlist(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [watchlistMovies, data]);


  const addToFavorites= async()=>{
    await axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      favorite: !isMoviesFavorites,
    });
    setisMovieFavorites((prev)=>!prev);
  };
  const addToWatchlist= async()=>{
    await axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      watchlist: !isMoviesWatchlist,
    });
    setisMovieWatchlist((prev)=>!prev);

  };
  // console.log(recommendations)
  if(isFetching){
    return(
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="6rem"/>
      {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
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
    <div className={classes.div}>
      <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4}
        style={{marginBottom:'30px',marginTop:'10px'}}
        >
          <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
          />
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography variant="h3" align="center" gutterBottom fontFamily="Helvetica Neue">
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
          <Typography variant="h5" align="center" gutterBottom fontFamily="Helvetica Neue" >
            {
              data?.tagline
            }
           
            
          </Typography>
          <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography gutterBottom variant="subtitle1" style={{ marginLeft: '10px' }} fontFamily="Helvetica Neue">
              {data?.vote_average}/10
            </Typography>
          </Box>
          <Typography gutterBottom variant="h6" align="center" fontFamily="Helvetica Neue">{data?.runtime}min
          
          <span>{data?.spoken_languages.length  ? `/ ${data?.spoken_languages[0].name}` : null}</span>
          
          </Typography>
          </Grid>
          <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link className={classes.links} key={genre.name} to="/" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} alt="genres" />
              <Typography color="textPrimary" variant="subtitle1" fontFamily="Helvetica Neue"> {genre?.name}</Typography>
            </Link>
          ))}

        </Grid>

        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>Overview</Typography>
        <Typography style={{ marginBottom: '2rem' }} fontFamily="Roboto">{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom fontFamily="Helvetica Neue">Top Cast</Typography>
        <Grid item container spacing={2}>
          {data && data?.credits?.cast?.map((character, i) => (
            character.profile_path && (
            <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }}>
              <img
                className={classes.castImage}
                src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                alt={character.name}
              />
              <Typography color="textPrimary" align="center">{character?.name}</Typography>
              <Typography color="textSecondary" align="center">
                {character.character.split('/')[0]}
              </Typography>
            </Grid>
            )
          )).slice(0, 12)}
        </Grid>
        <Grid item container style={{marginTop:'2rem'}}>
              <div className={classes.buttonsContainer}>
              <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
                <ButtonGroup variant="outlined" size="medium">
                    <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language/>}>
                      Website
                    </Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" size="medium">
                    <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon/>}>
                      IMDB
                    </Button>
                    </ButtonGroup>
                    <ButtonGroup variant="outlined" size="medium">
                    <Button onClick={()=>setOpen(true)

                    } 
                    href={"#"} endIcon={<Theaters/>}>
                      Trailer
                    </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
                <ButtonGroup variant="outlined" size="medium">
                   <Button onClick={addToFavorites} endIcon={
                    isMoviesFavorites?<FavoriteBorderOutlined/>
                    : <Favorite/>
                   }>
                      {
                        isMoviesFavorites?'UNFAVORITE':'FAVORITE'
                      }
                   </Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" size="medium">
                <Button onClick={addToWatchlist} endIcon={
                    isMoviesWatchlist ?<Remove/>
                    : <PlusOne/>
                   }>
                      
                        Watchlist
                     
                      
                   </Button>
                    </ButtonGroup>
                    <ButtonGroup variant="outlined" size="medium">
                        <Button endIcon={<ArrowBack/>} sx={{
                          borderColor:'primary.main'
                        }}>
                        <Typography component={Link} to="/" color="inherit" variant='subtitle1'
                        style={{textDecoration:"none"}}
                     >
                                  Back
                        </Typography>

                        </Button>
                    </ButtonGroup>
                </Grid>
              </div>
        </Grid>
        </Grid>
        <Box marginTop='5rem' width="100%">
                        <Typography variant="h3" gutterBottom align='center' color="gray" textTransform="uppercase" fontFamily="Helvetica Neue">
                        Recommended Films📽️
                        </Typography>
                        {/* Loop through Recommended movies  */}
                          {
                            recommendations?<MovieList movies={recommendations} numberofMovies={15}/>
                            :
                            <Box>Sorry Nothing Was Found </Box>
                          }
        </Box>
        <Modal
        closeAfterTransition
        className={classes.Model}
        open={open}
        onClose={()=>setOpen(false)}
        >
          {
          
              <iframe
              autoPlay
              className={classes.video}
              frameBorder="0"
              title="Trailer"
              src={data?.videos?.results?.length ? `https://www.youtube.com/embed/${data.videos.results[0].key}` :
               `https://www.youtube.com/`}
              allow="autoplay"
              />
            
          }
        </Modal>

        </Grid>
     
    </div>
  )
}

export default MovieInformation


