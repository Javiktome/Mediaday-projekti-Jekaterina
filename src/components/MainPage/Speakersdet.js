import React from 'react'
import './main.css';
import { Row, Col } from 'react-bootstrap';
import sp1 from './speakerImages/frans_tihverainen.jpg';
import sp2 from './speakerImages/mikko_kodisoja.jpg';
import sp3 from './speakerImages/Ulrich_Mors.jpg';
import sp4 from './speakerImages/sami_marttinen.jpg';
function Speakersdet() {
    return (
        <div className="speaker-det">
            <Row>
                <Col>
                    <div className="speaker1">
                        <img style={{ width: '350px', height: '270px' }} src={sp1} alt="speaker1" />
                        <p className="det">

                            <b className="sp1-name">Frans Tihveräinen, FLYAR</b> <br />
                            Erilainen urapolku - Frans Tihveräinen: Suoraan koulun penkiltä pitkän linjan AR-ammattilaiseksi. Frans kertoo omasta nousustaan AR-ammattilaiseksi, ja esittelee omat vinkkinsä yrittäjyydestä haaveileville opiskelijoille. Puheenvuoro esitetään suomeksi.

                        </p>
                    </div>
                </Col>


                <Col>
                    <div className="speaker2">
                        <img style={{ width: '400px', height: '300px' }} src={sp2} alt="speaker2" />
                        <p className="det">

                            <b className="sp1-name">Mikko Kodisoja, FIREFRAME</b> <br />
                            Yrityksen perustaja Mikko Kodisoja kertoo, miksi vaihtoi peliteollisuuden elokuvamaailmaan. Kuumana puheenaiheena Suomen ensimmäinen Hollywood-tason ledseinä-studio. Puheenvuoro esitetään englanniksi.

                        </p>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <div className="speaker3">
                        <img style={{ width: '350px', height: '270px' }} src={sp3} alt="speaker1" />
                        <p className="det">

                            <b className="sp1-name">Ulrich Mors, Sony Independent Expert</b> <br />
                            Ulrich Mors esittelee Sonyn uusimmat videokamerauutuudet ammattimaisten videotuotantojen käyttöön. Näkökulmana kameroiden käyttö eurooppalaisessa indie-elokuvatuotannossa, josta Ulrichilla on itsessään paljon kokemusta. Puheenvuoro esitetään englanniksi.
                        </p>
                    </div>
                </Col>


                <Col>
                    <div className="speaker4">
                        <img style={{ width: '340px', height: '270px' }} src={sp4} alt="speaker2" />
                        <p className="det">

                            <b className="sp1-name">Sami Marttinen, SWAPPIE</b> <br />
                            Sami Marttinen esittelee Swappien tarinan, ja teknologian merkityksen yrityksen nousun taustalla. Puheenvuoro esitetään suomeksi.

                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Speakersdet
