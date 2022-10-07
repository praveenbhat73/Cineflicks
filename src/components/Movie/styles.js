import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
   
   
   padding: '10px',
   
   
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
    '&:hover':{
      transform:'scale(1.02)',
    },
    
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [
      theme.breakpoints.down('sm')
      
    ]:{
      marginTop:'10px'
    },
    [
      theme.breakpoints.up('xs')
    ]: {
      display: 'flex',
      flexDirection: 'column',
    },
    // textDecoration:'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {

    borderRadius:'10px',
    height: '310px',
    marginBottom: '12px',
    
    border:'1px solid black',
    
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0.7em 1.1em 1.1em rgb(64, 64, 69)',
  
    },
  },
}));


