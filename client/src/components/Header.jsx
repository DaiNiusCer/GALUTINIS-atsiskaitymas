import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Link} from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

import "./Header.css" 

const Header=(props)=> {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"black" }}>
      <AppBar position="static" sx={{backgroundColor:"rgb(158,213,203)", boxShadow:" 6px 2px 15px -2px rgba(255,252,247,0.68)",height:80, display:"flex", alignItems:"space-around", justifyContent:"center"}} >
        <Toolbar>
          <button className='logoBtn'>  <Link to="/"><img className='logo' src="images/blog_logo.png" alt="logo" /></Link></button>
      
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
         
          <button  className='navBtn'><Link to="/register"> Register<HowToRegIcon/></Link></button>
          <button className='navBtnRight'><Link className='homeBtn' to="/login"> Login<LoginIcon/></Link></button>


         
         
         
            <div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
              <Menu sx={{width:300, color:"black"}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem sx={{backgroundColor:"rgb(190, 190, 190)",textAlign:"center"}}><Link to="/">Main</Link></MenuItem>
                <MenuItem sx={{backgroundColor:"rgb(190, 190, 190)",textAlign:"center"}}><Link to="/contacts">Contacts</Link></MenuItem>
                <MenuItem sx={{backgroundColor:"rgb(190, 190, 190)",textAlign:"center"}}><Link to="/aboutus">About</Link></MenuItem>
              
              </Menu>
            </div>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header