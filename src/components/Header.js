import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';



function Header() {
    return (
        <div className="Header">
            
            <Box style={{ backgroundColor: '#1E5631', padding: '10px' }}>
                <Container style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center' }}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>  
                    <img width={150} style={{ marginLeft: 20 }} alt="complex" src="f_logo.png" />
                    <Stack direction="row" spacing={4}>
                        <Button sx={{ color: 'white', fontSize:'20px' }} variant="text" href="#">LORE</Button>
                        <Button sx={{ color: 'white', fontSize:'20px' }} variant="text" href="#">ABOUT</Button>
                        <Button sx={{ color: 'white', fontSize:'20px' }} variant="text" href="#">CLUB</Button>
                        <Button sx={{ color: 'white', fontSize:'20px' }} variant="text" href="#">ROARMAP</Button>
                        <Button sx={{ color: 'white', fontSize:'20px' }} variant="text" href="#">FAQS</Button>
                    </Stack>
                    <Button sx={{ borderRadius: 10, color: '#496300', bgcolor: 'white', marginRight: 10, height: 40 }} variant="outlined" size="large">JOIN DISCORD</Button>
                </Container>
            </Box>
            
        </div>
    );
}

export default Header;
