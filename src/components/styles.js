import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    root:{
        // overflowY: 'scroll',
        // scrollBehavior:'smooth',
        // '&::-webkit-scrollbar':{
        //   display:'none'
        // },
        display:'flex',
        height:'100%',
    },
    toolbar:{
        height:'70px',
    },
    content:{
        flexGrow:'1',
        padding:'2em',
        width:'100%',
        [
            theme.breakpoints.down('sm')
        ]:{
            padding:'0',
            // width:'100%'
        },
    },
}))