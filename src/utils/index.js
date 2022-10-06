import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
    },
  });
// params are mostly used to define set of  parameters to use with end of url 
export const fetchToken=async()=>{
    try {
    const{data}=await moviesApi.get('/authentication/token/new');

    const token =data.request_token;

    if(data.success){
            localStorage.setItem('request_token',token);
            // // console.log(window.location.origin);
            window.location.href=`https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
            // window.location.href=`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://www.yourapp.com/approved`
            // // window.location.href={}   
            // // window.location='/'

            // localStorage.setItem('request_token', token);
            // window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
         }
}
    catch(error)
    {
        console.log("sorry,Your Token isnt created")
    }
}

export const createSessionId = async () => {
    const token = localStorage.getItem('request_token');
  
    if (token) {
        try{
            const {data:{session_id}}=await moviesApi.post('authentication/session/new',{
                request_token:token,
            });
            localStorage.setItem('session_id', session_id);
            return session_id;
        }
        catch(error){
            console.log(error);
        }

    }
    else{
        console.log("couldn't create session id")
    }
    //   return null;
  };
