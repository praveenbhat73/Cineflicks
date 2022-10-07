import React,{useRef} from 'react';
import { CssBaseline } from '@mui/material';
import {Route,Routes} from 'react-router-dom';

import {Actors,MovieInformation,Movies,NavBar,Profile} from '../components/index'
import useAlan from './Alan';
import useStyles from './styles';


const App = () => 
{
  const classes=useStyles();
  const alanBtnContainer=useRef();
  useAlan();
    return (
      <>
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
            <Route exact path="/" element={<Movies/>}/>
            <Route exact path="/approved" element={<Movies/>}/>
            <Route exact path="/movie/:id"  element={<MovieInformation/>}/>
            <Route exact path="/actors/:id" element={<Actors/>} />
            <Route exact path="/profile/:id" element={<Profile/>} />
            {/* <Route exact path="/error" element={<PageNo/>} /> */}

            {/* <redirect element={<PageNo/>}/> */}
        </Routes>
        </main>
     <div ref={alanBtnContainer}/>
    </div>
    </>
);
} 
           


export default App;
