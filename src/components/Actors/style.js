import { makeStyles } from '@mui/styles';

export default makeStyles ((theme)=>({

    container:{
        display:'flex',
        gap:'2px',
        justifyContent:'center',
        margin:'10px !important',
        [
            theme.breakpoints.down('sm')]: {
            flexDirection:'column',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'center'

        },
    },
    image: {
        // maxWidth: '90%',
        // borderRadius: '20px',
        // objectFit: 'cover',
        // boxShadow: '0.5em 0.5em 1em',
        objectFit:'cover',
        borderRadius: '5px',
        boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
        width: '80%',
        '&:hover':{
            transform:'scale(1.01)',
            boxShadow: '0.7em 1.1em 1.1em rgb(64, 64, 69)',
        },
        [theme.breakpoints.down('md')]: {
          margin: '0 auto !imporatant',
          width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
          margin: '0 auto !imporatant',
          width: '100%',
          height: '350px',
          marginBottom: '30px',
        },
      },
      btns: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
      },
}))