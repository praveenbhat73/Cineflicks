import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  div:{
    dispaly:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
  button:{
    padding:'15px',
      outline:'none',
      alignItems:'center',
      color:'white',
      background:'#0099FF',
      border:'1px solid white',
      borderRadius:'5px',
      cursor:'pointer',
      transition: 'all .5s ease-in-out',
      '&:hover':{
        background: '#0085ff',
        cursor: 'pointer',
  }
},
h3:{
    textTransform:'uppercase',
    color:'gray',
},
divi:{
    display:'flex',
    alignItems:'center',
    gap:'5px',
},
h1:{
    color:'gray',
    gap:'2px',
    fontSize:'15px',
    textIndent:'10px',
    wordSpacing:'10px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
},
}));