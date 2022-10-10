import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
  
  imageLink:{
    display: 'flex',
    justifyContent:'center',
    padding:'10% 0',
  } ,
  image:{
    width:'70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
   th:{
    
    [
      theme.breakpoints.down('sm')
    ]:{
    color:theme.palette.mode === 'dark' && 'grey',
    }
  },
}))
