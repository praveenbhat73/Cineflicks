import { makeStyles } from '@mui/styles';

export default makeStyles((theme) =>({
  
    containerSpaceAround:{
      display: 'flex',
      justifyContent: 'space-around',
      margin: '10px 0 !important',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding:'2',
        // marginTop:'20px',
      },
    
    },
    poster: {
        borderRadius: '5px',
        boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
        width: '80%',
        '&:hover':{
            transform:'scale(1.01)',
            boxShadow: '0.7em 1.1em 1.1em rgb(64, 64, 69)',
        },
        [theme.breakpoints.down('md')]: {
          margin: '0 auto !important',
          width: '50%',
          display:'flex',
         
        //  marginLeft:'50%'
          // height: '28rem',
        },
        [theme.breakpoints.down('sm')]: {
          margin: '0 auto !important',
          // marginTop:'50px',
          width: '100%',
          height: '350px',
          marginBottom: '30px',
         
        },
   
      },
      genresContainer: {
        margin: '10px 0 !imaportant',
        display: 'flex',
        // gap:'20px',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      },
      genreImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)',
        marginRight: '10px',
      },
      links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
          padding: '0.5rem 1rem',
        },
      },
      castImage: {
        width: '100%',
        maxWidth: '7em',
        height: '8em',
        objectFit: 'cover',
        borderRadius: '10px',
        '&:hover':{
          transform:'scale(1.02)',
          
        },
      },
      buttonsContainer:{
        display:'flex',
        alignItems:'center',
        // justifyContent:'space-between',
        gap:'10px',
        width:'100%',
        [
          theme.breakpoints.down('sm')
        ]:{
          flexDirection:'column',
          // width:'80%'
        },
      },
      Model:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
      },
      video:{
        width:'50%',
        height:"50%",
        [theme.breakpoints.down('sm')]:{
          width:'90%',
          height:"90%",
        },

      },
      
      
      
}));