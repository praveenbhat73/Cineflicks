import React from 'react'
import {Typography,Grid,Grow,Tooltip,Rating} from '@mui/material';
import {Link} from 'react-router-dom';
import useStyles from './styles.js';
const Movie = ({movie,i}) => {
    const classes=useStyles();
    // console.log(movie,i)
  return (
   <>
    <Grid item xs={12} sm={6}  lg={3} xl={2.1} className={classes.movie} >
    <Grow in key={i} timeout={(i + 1) * 210}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
        {
          
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
            alt={movie.title}
            className={classes.image}
          />
        }
          <Typography className={classes.title} variant="h5" fontFamily="Helvetica Neue">
          {
            movie.title
          }
          </Typography>
          <Tooltip placement='right' disableTouchListener title={`${movie.vote_average}/10`}>
          <div>
          <Rating readOnly value={movie.vote_average/2} precision={.1}/>
          </div>
          </Tooltip>
          </Link>
          </Grow>
    </Grid>
   </>
  )
}

export default Movie
