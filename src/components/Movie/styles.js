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
      theme.breakpoints.up('xs')
    ]: {
      display: 'flex',
      flexDirection: 'column',
    },
    textDecoration:'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {

    borderRadius:'20px',
    height: '330px',
    marginBottom: '12px',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    // boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow:' rgba(0, 0, 0, 0.4) 0px 30px 90px;'
  
    },
  },
}));


