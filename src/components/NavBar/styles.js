 import {makeStyles} from '@mui/styles'
 const drawerWidth=240;
 export default makeStyles((theme)=>(
    {
        app:{
            [
                theme.breakpoints.down('sm')
            ]:{
                width:'100%',
                // marginBottom:'10px',
            }
        },
        toolbar:{
            height: '80px',
            display: 'flex',
            justifyContent:'space-between',
            marginLeft:'230px',
            [
                theme.breakpoints.down('sm')
            ]:{
                marginLeft:'0',
                flexWrap:'wrap',
                width:'95%',
                // height:'100%',
                // marginBottom:'10px',
            }
        },
        menuButton:{
            marginRight:theme.spacing(2),
            [
                theme.breakpoints.up('sm')
            ]:{
                display: 'none',
            },
        },
        drawer:{
            [
                theme.breakpoints.up('sm')
            ]:{
                width:drawerWidth,
                flexShrink:0,
            },
        },
        drawerPaper:{
            width:drawerWidth,
        },
        linkButton:{
            '&:hover':{
                color:'white !important',
                textDecoration:'none',
            },
        },
    }
 ))