import React,{useState} from 'react'
import { TextField,InputAdornment } from '@mui/material'
import {Search as SearchIcon} from '@mui/icons-material'
import {useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { searchMovie } from '../../features/currentGenreOrCategory'
import useStyles from './styles.js'
const Search = () => {
    // const { searchQuery } = useSelector((state) => state.currentGenreOrCategory);
    const[query,setQuery]=useState('');
    const classes=useStyles();
    const dispatch=useDispatch();

    const location = useLocation();

    //   useEffect(() => {
    //     setQuery(searchQuery);
    //   }, [searchQuery]);


    const handleKeyPress=(event)=>{
        if(event.key==='Enter'){
            dispatch(searchMovie(query));
             setQuery('');
        }
        
    }

    if (location.pathname !== '/') return null;
  return (
    <>
        <div className={classes.searchContainer}>
            <TextField
            placeholder='🚀Search Movie Here!'
            onKeyPress={handleKeyPress}
            value={query}
            onChange={
                (event)=>setQuery(event.target.value)
            }
            variant="standard"
            InputProps={
                {
                    className:
                        classes.input,
                    
            startAdornment:(
                <InputAdornment position='start'>
                <SearchIcon/>
                </InputAdornment>
            ),
                }
            }
            />
        </div>
    </>
  )
}

export default Search
 


