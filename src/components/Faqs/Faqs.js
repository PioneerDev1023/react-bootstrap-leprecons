import React from "react";
import { Container, Accordion } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Faqswave from '../../assets/images/wave/faqswave.png';
import './Faqs.css';
import Button from "@restart/ui/esm/Button";

function Faqs() {

  return (
    <div className="Faqs" id="Faqs">
      <div className="Faqswave"><img src={Faqswave} alt="Faqswave"/></div>
      <div className="Faqs-main">
        <Container className="Faqs-main-body pt-4 pb-4">
            <div className="Faqs-main-title">
                <h4>FREQUENTLY ASKED</h4>
                <h3 className="mt-2">QUESTIONS</h3>
            </div>
            <div className="Faqs-main-accordion mb-5">
                <Accordion defaultActiveKey="0">
                    <hr/>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>WHAT ARE HUMANIMALS? </Accordion.Header>
                        <Accordion.Body>
                        NFT stands for non-fungible token which is a unique, one of kind item that is provably rare. Think of the Mona Lisa, but digital
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>HOW TO OBTAIN A HUMANIMAL?</Accordion.Header>
                        <Accordion.Body>
                        But in order that you may understand whence every born error is the pleasure of accusing and praising the pain, I will open the whole matter, and will explain the very things which were said by that inventor of the truth and as it were the architect of the blessed life. No one does it.
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                </Accordion>
            </div><hr className="mt-5 mb-5"/>
            <div className="Faqs-main-discord mt-5">
                <h4>THE PARTY NEVER STOPS</h4>
                <h3 className="mb-5">Get Aped with Us!  Join our Discord</h3>
                <a href="https://discord.gg/JCXW9Qucux" target="_blank">Let's Start</a>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Faqs;