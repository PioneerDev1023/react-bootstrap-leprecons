import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Clubwave from '../../assets/images/wave/clubwave.png';
import Avatar1 from '../../assets/images/avatar/1.png';
import Avatar2 from '../../assets/images/avatar/2.png';
import Avatar3 from '../../assets/images/avatar/3.png';
import Avatar4 from '../../assets/images/avatar/4.png';
import Avatar5 from '../../assets/images/avatar/5.png';
import Avatar6 from '../../assets/images/avatar/6.png';
import Avatar7 from '../../assets/images/avatar/7.png';
import Avatar8 from '../../assets/images/avatar/8.png';
import Avatar9 from '../../assets/images/avatar/9.png';
import Avatar10 from '../../assets/images/avatar/10.png';
import Avatar11 from '../../assets/images/avatar/11.png';
import Avatar12 from '../../assets/images/avatar/12.png';
import Avatar13 from '../../assets/images/avatar/13.png';
import Avatar14 from '../../assets/images/avatar/14.png';
import Avatar15 from '../../assets/images/avatar/15.png';
import Avatar16 from '../../assets/images/avatar/16.png';
import Avatar17 from '../../assets/images/avatar/17.png';
import Avatar18 from '../../assets/images/avatar/18.png';
import Avatar19 from '../../assets/images/avatar/19.png';
import Avatar20 from '../../assets/images/avatar/20.png';
import './Club.css';

function Club() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="Club" id="Club">
      <div className="Clubwave"><img src={Clubwave} alt="Clubwave"/></div>
      <div className="Club-main">
          <Container>
            <div className="Club-main-title">
                <h4>THE 24K GOLD</h4>
                <h3 className="mt-2">CLUB</h3>
                <p>The 24k Gold edition by the Lying LepreCons are the rarest NFTs <br/>They are all hand drawn and have no element in common with the regular collection.</p>
            </div>
            <Carousel responsive={responsive} autoPlay="true">
              <div><img src={Avatar1} alt="Avatar1"/></div>
              <div><img src={Avatar2} alt="Avatar2"/></div>
              <div><img src={Avatar3} alt="Avatar3"/></div>
              <div><img src={Avatar4} alt="Avatar4"/></div>
              <div><img src={Avatar5} alt="Avatar5"/></div>
              <div><img src={Avatar6} alt="Avatar6"/></div>
              <div><img src={Avatar7} alt="Avatar7"/></div>
              <div><img src={Avatar8} alt="Avatar8"/></div>
              <div><img src={Avatar9} alt="Avatar9"/></div>
              <div><img src={Avatar10} alt="Avatar10"/></div>
              <div><img src={Avatar11} alt="Avatar11"/></div>
              <div><img src={Avatar12} alt="Avatar12"/></div>
              <div><img src={Avatar13} alt="Avatar13"/></div>
              <div><img src={Avatar14} alt="Avatar14"/></div>
              <div><img src={Avatar15} alt="Avatar15"/></div>
              <div><img src={Avatar16} alt="Avatar16"/></div>
              <div><img src={Avatar17} alt="Avatar17"/></div>
              <div><img src={Avatar18} alt="Avatar18"/></div>
              <div><img src={Avatar19} alt="Avatar19"/></div>
              <div><img src={Avatar20} alt="Avatar20"/></div>
          </Carousel>   
          </Container>
      </div>
    </div>
  );
}

export default Club;