import React from 'react';
import './main.css';
import { Row, Col } from 'react-bootstrap';
import p1 from './posters/avita-logo-2016-09_logoliikennem-300x143.jpg';
import p2 from './posters/flyAR-r-logo-whiteonblack.png';
import p3 from './posters/fireframe_logo_symbol_white_500x500_no_left.png';
import p4 from './posters/foodandco_logo_some_1200x1200.jpg';
import p5 from './posters/metropolia_m_oranssi.png';
import p6 from './posters/panasonic.png';
import p7 from './posters/swappie.png';
import p8 from './posters/trail-text-black-1024px_1.jpg';
import p9 from './posters/Crestron.png';
import p10 from './posters/Sony.png';

function Posters() {
    return (
        <div >
            <div className="posters-head">
            MUKANA MEDIA DAYSSÄ
            </div>
            <div className="poster-main">
                <Row>
                    <Col>
                        <img className="poster" src={p1} alt="poster1" />
                        <img className="poster" src={p2} style={{ width: '150px', height: '150px' }} alt="poster2" />
                        <img className="poster" src={p3} style={{ backgroundColor: 'red', width: '150px', height: '150px' }} alt="poster3" />
                        <img className="poster" style={{ width: '150px', height: '150px' }} src={p4} alt="poster4" />
                        <img className="poster" src={p5} style={{ width: '150px', height: '150px' }} alt="poster5" />
                        <img className="poster" src={p6} alt="poster6" />
                        <img className="poster" src={p7} style={{ width: '150px', height: '150px' }} alt="poster7" />
                        <img className="poster" style={{ width: '100px', height: '100px' }} src={p8} alt="poster8" />
                        <img className="poster"  src={p9} alt="poster8" />
                        <img className="poster" src={p10} alt="poster8" />
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Posters
