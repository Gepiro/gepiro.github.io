import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "./LogoYoungInfolife.png"
import './Navbar.css';
import {Grid, Link} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const pages = ['Home', 'La nostra squadra', 'Contatti'];

function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (index) => {
        console.log(index)
        switch (index){
            case 0:
                navigate('/')
                break
            case 1:
                navigate('/team')
                break
            case 2:
                navigate('/contacts')
                break
            default:
                console.log("Error")
        }
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: "#EEEEEE"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*"Little Menu"*/}
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={() => {handleCloseNavMenu(index)}}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*"Navbar center"*/}
                    <Grid id={"Logo"} sx={{
                        display: {xs: 'flex', md: 'none'},
                        mr: 1,
                    }} >
                        <img src={logo} id={"Logo"} />
                    </Grid>

                    {/*"Big Menu"*/}
                    <Grid sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img  src={logo} id={"Logo"} />
                    </Grid>
                    <Box sx={{ flexGrow: 1 , display: {xs: 'none', md: 'flex'}}} />
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={() => {handleCloseNavMenu(index)}}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;