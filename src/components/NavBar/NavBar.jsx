import React, {useState,useEffect,useContext} from 'react'
import {AppBar,IconButton,Toolbar,Drawer,Button,Avatar, useMediaQuery} from '@mui/material'
import {Menu,AccountCircle,Brightness4,Brightness7} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { fetchToken, createSessionId, moviesApi } from '../../utils/index';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import {Sidebar,Search} from '..'
import { setUser,userSelector } from '../../features/auth';
// import {Profile} from '..'
import { ColorModeContext } from '../../utils/ToggleColorMode'
// import { useContext } from 'react'

const NavBar = () => {
  const classes=useStyles();
  const isMobile=useMediaQuery('(max-width:600px)')
  const theme=useTheme(); 
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(userSelector);
 const[mobileOpen,setMobileOpen]=useState(false);


  // console.log(user)
  const colorMode=useContext(ColorModeContext)
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed" className={classes.app}>
        <Toolbar className={classes.toolbar} >
            {
              isMobile && (
                <IconButton
                color="inherit"
                edge="start"
                styles={{outline:'none'}}
                onClick={
                  ()=>setMobileOpen((prevMobileOpen)=>!prevMobileOpen)
                }
                className ={classes.menuButton}
                >
                  <Menu/>
                </IconButton>
              )
            }
            <IconButton color="inherit" sx={{ml:1}}
            onClick={colorMode.toggleColorMode}>
             {
              theme.palette.mode==='dark'?<Brightness7/>:<Brightness4/>

             }
            </IconButton>
            {
              !isMobile && <Search/>
            }
            <div>
              {
                !isAuthenticated ? (
                    <Button color="inherit" onClick={fetchToken}>
                        Login &nbsp;
                        <AccountCircle/>
                    </Button>
                ):(
                  <Button
                  color="inherit"
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={classes.linkButton}
                  onClick={() => setMobileOpen(false)}
                  >
                    {
                      !isMobile && <>My Movies &nbsp;</>
                    }
                    <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                 src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
                    

                  </Button>
                )
              }
            </div>
            {
              isMobile && <Search/>
            }
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
            {
              isMobile ? (
                  <Drawer
                  variant='temporary'
                  anchor='right'
                  open={mobileOpen}
                  onClose={()=>setMobileOpen((prevMobileOpen)=>!prevMobileOpen)}
                  // className={classes.drawerBackground}
                  classes={{paper:classes.drawerPaper}}
                  ModalProps={{keepMounted:true}}   
                  >
                  <Sidebar setMobileOpen={setMobileOpen}/>
                  </Drawer>
             ) : (
                  <Drawer classes={{paper:classes.drawerPaper}} 
                  variant="permanent" open>
                    <Sidebar setMobileOpen={setMobileOpen}/>
                  </Drawer>
             )
            }
        </nav>
      </div>
    </>
  )
}

export default NavBar
