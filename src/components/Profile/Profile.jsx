import React,{useState,useEffect} from 'react'
import { userSelector } from '../../features/auth'
import { Typography,Button,Box } from '@mui/material';
// import { PowerOffRounded  } from '@mui/icons-material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import animationData from '../../lotties/121421-login (1).json';
import useStyles from './styles.js';
const Profile = () => {
  const classes=useStyles();
  const favoriteMovies=[];
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
  const[set,seti]=useState(false);
  const logout=()=>{
    localStorage.clear();
    window.location.href="/";
  }
  return (
    <Box>
    <Box display="flex" justifyContent="space-between">
    {/* <Button color="inherit" onClick={logout}>
      Logout &nbsp;
      <ExitToApp/>
    </Button> */}

    <div
    className={classes.div} > 
    <button
    className={classes.button}
    onClick={()=>{
      seti(!set)
    }}
   
    >
      {
       set ?
       "Hide Profile😣"
       :
       "Who's Watching?😎" 
      }
    </button>
    {
      set &&
      <>
    <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}
        
      />
    <h3 
    className={classes.h3}>
    Profile
    </h3>
    <div 
    className={classes.divi}
    >
      {
        <>
       
        <h1 
        className={classes.h1}
      >Username:- </h1>
       
                    {
                          user.username
                    }
       
       
        </>
      }
      </div>

    {
      !favoriteMovies.length
      ?
      <Typography variant='h5'
      sx={{
        fontSize:'20px',
        color:'gray',
        marginTop:'10px',
        marginBottom:'10px'
      }}>
        Add some favorite movies ❤️
      </Typography>
      :(
        <Box>
          Favorite Movie🍟
        </Box>
      )
    }
      <Button color="inherit" onClick={logout}
      >
      Logout &nbsp;
      <PowerSettingsNewIcon/>
    </Button>
      </>
    }
    </div>
    </Box></Box>
  )
}

export default Profile
