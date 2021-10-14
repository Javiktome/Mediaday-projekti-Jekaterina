import React from 'react'
import './main.css';
import { Button } from 'react-bootstrap';
import Logo from './mediaday.jpg';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div >
            <div className="footer-main">
            <Row>
                <Col>
                    <img style={{width:'350px'}} src={Logo} alt="logoimg" />
                    <h3>2022 , bigger and better</h3>
                </Col>
                <Col>
                    <div>
                        <h6><b>
                            Ota yhteyttä</b> </h6>
                            <br />
                        <p>Haluatko ottaa osaa tapahtumaan tai sinulla on muuta kysyttävää? Yhteydenotot ja tiedustelut puhelimitse tuottaja Päivi Pitkäseen 040 123 4567 tai sähköpostilla mediaday2021@metropolia.fi.</p>
                    </div>

                    <div>
                        <h6><b>Järjestäjät</b></h6>
                        <p>Mediadayn järjestää Metropolia Ammattikorkeakoulu yhteistyökumppaneiden kanssa.</p>
                    </div>

                    <div>
                        <h6>
                            <b>Medioille</b>
                        </h6>

                        <p>
                            Löydät Mediadayn lehdistötiedotteen täältä suomeksi ja englanniksi (julkaistaan 12/2021).
                        </p>
                    </div>

                </Col>
            </Row>
            </div>
           

            <div className="footer-bar">
            2022 © Metropolia Ammattikorkeakoulu.
            </div>
        </div>
    )
}

export default Footer
