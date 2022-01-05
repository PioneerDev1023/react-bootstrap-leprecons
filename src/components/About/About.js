import React from "react";
import { Container } from "react-bootstrap";
import Aboutwave from '../../assets/images/wave/aboutwave.png';
import Avatar1 from '../../assets/images/avatar/1.gif';
import './About.css';

function About() {
  return (
    <div className="About" id="About">
      <div className="Aboutwave"><img src={Aboutwave} alt="Aboutwave"/></div>
      <div className="About-main">
          <Container className="About-main-body pt-4 pb-4">
                <div className="About-main-images">
                    <div className="About-main-image"><img src={Avatar1} alt="Avatar1"/></div>    
                </div>
                <div className="About-main-text">
                    <h4>About</h4>
                    <h3 className="mt-2">LEPRECONS</h3>
                    <p className="mt-2"> The Lying LepreCons are 11,111 unique NFT's randomly generated from over 100 hand drawn traits. Launching on the Solana Network, they are designed with trend setting art and powerful utility. LepreCons are priced at 1.5 Sol and use a "Fair Launch" Minting Process that guarantees a great purchasing experience.</p>
                </div>                
            </Container>
      </div>
    </div>
  );
}

export default About;