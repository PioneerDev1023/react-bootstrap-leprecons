import React from "react";
import { Container, Row } from "react-bootstrap";
import Lorewave from '../../assets/images/wave/lorewave.png';
import Avatar1 from '../../assets/images/avatar/4.png';
import Avatar2 from '../../assets/images/avatar/18.png';
import Avatar3 from '../../assets/images/avatar/19.png';
import Avatar4 from '../../assets/images/avatar/30.png';
import './Lore.css';

function Lore() {
  return (
    <div className="Lore" id="Lore">
      <div className="Lore-main">
          <Container className="Lore-main-body">
                <div className="Lore-main-text">
                    <h4>LORE</h4>
                    <h3 className="mt-2">LEPRECONS</h3>
                    <div className="mt-2 lore-text">

                      <p>The Lying LepreCons  (not to be confused with their friendly cousins the LepreCHAUNS) were the worst scammers, in the Emerald. And their leader was Shameless the LepreCon.</p>

                      <p>One day when Shameless was Tweeting about like a little blue bird (get it, “blue bird” and “Tweeting) with his evil, “Iconic” friends who were “Baller Apes,” he stumbled into the Emerald City. </p>

                      <p>Rubbing his grubby little hands together Shameless just knew he would make a shcilling (‘er killing). When the citizens of the Emerald City saw all the prizes Shameless had they rushed to buy! Some even traveled long distances, following a confusing Road Map, and spent 1,000’s in “Gas” just to get there. Shameless happily took all their Clover Coin, while promising them treasure “yielding” prizes. </p>

                      <p>But Shamless tricked the Citizens and left them in "Discord," disappearing with their money.</p> 

                      <p>Only Magic Mint can catch Shameless and his 11,111 Lying LepreCon friends and return the stolen Clover Coin.</p>

                    </div>
                </div>
                <div className="Lore-main-images">
                  <Row>
                    <div className="Lore-main-image"><img src={Avatar1} alt="Avatar1"/></div>
                    <div className="Lore-main-image"><img src={Avatar2} alt="Avatar2"/></div>
                  </Row>
                  <Row>
                    <div className="Lore-main-image"><img src={Avatar3} alt="Avatar3"/></div>
                    <div className="Lore-main-image"><img src={Avatar4} alt="Avatar4"/></div>
                  </Row>                     
                </div>
            </Container>
      </div>
    </div>
  );
}

export default Lore;