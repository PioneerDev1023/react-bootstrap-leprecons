import React from "react";
import { Container, NavLink } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Footerwave from '../../assets/images/wave/footerwave.png';
import Footerlogo from '../../assets/images/f_logo.png';
import './Footer.css';
import { FaTwitter, FaDiscord, FaFacebookF, FaPaperPlane, FaCamera, FaCameraRetro } from "react-icons/fa";

function Footer() {

  return (
    <div className="Footer">
      <div className="Footerwave"><img src={Footerwave} alt="Footerwave"/></div>
      <div className="Footer-main">
        <Container className="Footer-main-body pt-4 pb-4">
            <div className="Footer-main-logo"><img src={Footerlogo} alt="Footerlogo"/></div>
            <div className="Footer-main-community mt-5">
                <NavLink href="https://discord.gg/JCXW9Qucux" target="_blank"><FaCameraRetro/></NavLink>
                <NavLink href="https://twitter.com/Lying_Leprecons" target="_blank"><FaTwitter/></NavLink>
                <NavLink href="https://discord.gg/JCXW9Qucux" target="_blank"><FaFacebookF/></NavLink>
                <NavLink href="https://discord.gg/JCXW9Qucux" target="_blank"><FaDiscord/></NavLink>
                <NavLink href="https://discord.gg/JCXW9Qucux" target="_blank"><FaPaperPlane/></NavLink>
                
            </div>
            <div className="Footer-main-infor mt-5">
                <p>Terms of Service</p>
                <p>0x5df340b5d1618c543ac81837da1c2d2b17b3b5d8<br/>© 2021 Billionaire Club. All rights reserved</p>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;