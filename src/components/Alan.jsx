import {useEffect,useContext} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken, createSessionId, moviesApi } from '../utils/index.js';
const useAlan = () => {

    const {setMode}=useContext(ColorModeContext);
    useEffect(() => {
        alanBtn({
            key: '125356b413ce29af9c8469dd510399762e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command,mode}) => {

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
            },
        });
      }, []);


}

export default useAlan;
