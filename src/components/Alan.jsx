import {useEffect,useContext} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken, createSessionId, moviesApi } from '../utils/index.js';
import { selectGenreOrCategory,searchMovie } from '../features/currentGenreOrCategory';
const useAlan = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {setMode}=useContext(ColorModeContext);
    useEffect(() => {
        alanBtn({
            key: '125356b413ce29af9c8469dd510399762e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command,mode,genres,genreOrCategory,query}) => {
                if(command==='chooseGenre'){
                    const foundGenre=genres.find((g)=>g.name.toLowerCase()===genreOrCategory.toLowerCase());
                  if(foundGenre){
                    navigate('/');
                    dispatch(selectGenreOrCategory(foundGenre.id));
                  }
                  else{
                    const category=genreOrCategory.startsWith('top')?'top_rated':genreOrCategory;
                    navigate('/')
                    dispatch(selectGenreOrCategory(category))
                  }
                }

                if(command==='changeMode'){
                    if(mode==='light')
                    {
                        setMode('light');
                    }else{
                        setMode('dark');
                    }
                }
                else if(command==='login')
                {
                    fetchToken();


                }
                else if(command==='logout')
                {
                    localStorage.clear();
                    window.location.href="/";
                }
                else if(command==='search'){
                    dispatch(searchMovie(query));
                }
            },
        });
      }, []);


}

export default useAlan;
