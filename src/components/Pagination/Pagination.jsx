import React from 'react'
import {Typography,Button} from '@mui/material';
import useStyles from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Pagination = ({currentPage,setPage,totalPage}) => {
    const classes=useStyles();
    // const currentpage=1;
    const handleNext=()=>{
        if(currentPage!==totalPage){
            setPage((prevPage)=>prevPage+1);
        }
    }
    const handlePrev=()=>{
        if(currentPage!==1)
        {
        setPage((prevPage)=>prevPage-1);
        }
    }
    if(totalPage===0)
    return ;
  return (
    <div className={classes.container}> 
         <Button onClick={handlePrev} className={classes.button} variant="outlined" color="primary" type="button" size="large">
            <ArrowBackIcon/>
         </Button>
         <Typography variant='h4' className={classes.pageNumber}>
            {
                currentPage
            }
         </Typography>
         <Button onClick={handleNext} className={classes.button} variant="outlined" color="primary" type="button" size="large">
          <ArrowForwardIcon/>
         </Button>
    </div>
  )
}

export default Pagination
