import React,{useState,useEffect} from 'react'
import { userSelector } from '../../features/auth'
import { Typography,Button,Box } from '@mui/material';
import { ExitToApp  } from '@mui/icons-material';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import animationData from '../../lotties/63004-profile-password-unlock.json';
import useStyles from './styles.js';
import { useGetListQuery } from '../../services/TMDB';
import {RatedCards} from '..'
const Profile = () => {
  const classes=useStyles();
  // const favoriteMovies=[];
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const {user}=useSelector(userSelector);
  // console.log(user);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });


  useEffect(()=>{
    refetchFavorites();
    refetchWatchlisted();
  },[]);
  // const[set,seti]=useState(false);
  const logout=()=>{
    localStorage.clear();
    window.location.href="/";
  }
  return (
  <>    <Box
    display="flex"
    flexDirection="column"
    textAlign="center"
    alignItems="center"
    marginTop="10px"
  >
    <Lottie options={defaultOptions} height={300} width={300} />
    <br></br>
    <div>
      <Typography
        variant="h6"
        fontFamily={"Helvetica Neue"}
        gutterBottom
      >{`UserName : ${user.username}`}</Typography>
      <Typography
        variant="h6"
        fontFamily={"Helvetica Neue"}
        gutterBottom
      >{`UserID : ${user.id}`}</Typography>
    </div>

    <Button
      variant="outlined"
      sx={{ width: 200, padding: 1, margin: 2 }}
      color="inherit"
      onClick={logout}
    >
      Logout &nbsp; <ExitToApp />
    </Button>
  </Box>
  <br></br>

    {
      !favoriteMovies?.results?.length && !watchlistMovies?.results?.length
      ?
      <Typography variant='h5'
      sx={{
        fontSize:'30px',
        color:'gray',
        marginTop:'10px',
        marginBottom:'10px'
      }} fontFamily="Helvetica Neue">
        Add Some Movies 📽️
      </Typography>
      :(
        <Box style={{color:"gray",textTransform:"uppercase",fontSize:"20px"}}> 
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="WatchList Movies" data={watchlistMovies} />
        </Box>
      )
    }
     
    
    
  
    
    </>
  )
}

export default Profile
