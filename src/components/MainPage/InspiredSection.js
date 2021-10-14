import React from 'react';
import './main.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './mediaday.jpg';
import pic from './pic2.PNG';
function InspiredSection() {
    return (
        <div className="inspired-main">
            <div className="container d-flex align-items-center justify-content-center orange-bg my-5 rounded-3" id="subscribe">

                <div className="overall-header container">
                    <div className="main-header">
                        <img className="animation logo-img" src={Logo} alt="logo" />
                        <h3 className="description">METROPOLIA AMMATTIKORKEAKOULU 1.4.2022
                            VANHA MAANTIE 6, LEPPÄVAARA</h3><br />


                    </div>
                    <div className="animation">
                        <img className="img-fluid" src={pic} alt="img" />
                    </div>
                </div>

            </div>
            <div className="container d-flex align-items-center justify-content-center orange-bg my-5 rounded-3" id="subscribe">
                <div>
                    <h3>LET'S STAY IN TOUCH</h3>
                    <h6>Get updates on LiveStream, specials and more</h6>
                    <Link to="/stream"><button className="animation btn btn-danger align-center my-2">Watch Live Stream <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                        <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg></button></Link>
                </div>
            </div>
            <h2 className="heading">
                Let's get inspired
            </h2><br />
            <a className="fb-link" href="https://www.facebook.com/itsmediaday/">Facebook</a>

            <Row className="inspired-content">
                <Col md={3}>
                    <div className="speakers">
                        <h5 className="speaker-heading">Puhujia eri teollisuudenaloilta</h5><br />
                        <p className="speakers-para">
                            Huipputason ammattilaisten puheenvuoroja. Meillä on mukana Monta rautaista puhujaa monelta mediakentän osa-alueelta.
                        </p>
                    </div></Col>
                <Col md={3}>
                    <div className="connects">
                        <h5 className="connects-heading">Mediaday yhdistää</h5>
                        <br />
                        <p className="connects-para">
                            Mediaday tuo opiskelijat ja yritysmaailman yhteen. Näet uusimmat jutut ja tutustu ammattilaisten maailmaan.
                        </p>
                    </div></Col>
                <Col md={3}>  <div className="relaxed">
                    <h5 className="relaxed-heading">Rento ilmapiiri</h5><br />
                    <p className="relaxed-para">Hyväntuulinen tekemisen meininki. Meillä voi vapaasti kysellä ja ihmetellä.</p>
                </div></Col>
                <Col md={3}> <div className="comewith">
                    <h5 className="comewith-heading">Nostetut puhujat:</h5><br />
                    <p className="comewith-para">
                        Mikko Kodisoja, FIREFRAME
                        Yrityksen perustaja Mikko Kodisoja kertoo, miksi vaihtoi peliteollisuuden elokuvamaailmaan. Kuumana puheenaiheena Suomen ensimmäinen Hollywood-tason ledseinä-studio. Puheenvuoro esitetään englanniksi.
                    </p>
                </div></Col>
            </Row>


        </div>
    )
}

export default InspiredSection

