import React from "react";
// import SlideImg from '../assets/images/img/download.png'
import SlideSub from '../../assets/images/img/slogan1.png'
import Lorewave from '../../assets/images/wave/lorewave.png'
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from "material-ui-image";
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";
import { position } from "grid";
import './Slider.css';
import { Container, Row } from "react-bootstrap";

function Slider() {
    return(
        <div className="Slider">
            
            <div className="carousel">
                <Container className="top-content" >
                    <img className="sub-slide" src={SlideSub} alt="Sub Slide Image" />
                    <Button className="mint-button">M i n t</Button>
                    {/* <img className="wave-slide" src={Lorewave} alt="lorewave image" /> */}
                    {/* <Image  animationDuration={6000} src={SlideSub} alt="Slider Image" imageStyle={{width: 'auto', height: '350px'}} style={{ position:'absolute', display: 'flex', alignItems: 'center', marginTop: '50px', marginLeft: '100px' }}
                        />
                    <Button sx={{ color: 'white', bgcolor: '#1E5631' }} variant="contained" href="#">MINT</Button> */}
                </Container>
            </div>
            
        </div>
    );
}
export default Slider;