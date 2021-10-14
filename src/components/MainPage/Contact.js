import React from 'react'
import './main.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import link from './mediadaysoft.png'
function Contact() {
    return (
        <div>


            <div className="contact-main">
                <h1 className="contact-heading">Contact Form</h1>
                <form className="contact-form" action="#" style={{ marginTop: '9%' }}>

                    <input type="email" className="inp1" required="require" placeholder="Email" />
                    <input type="text" className="inp2" placeholder="Country" /> <br />

                    <textarea name="msg" id="msg" className="message" rows="7" required="require" placeholder="Your message..."></textarea><br /><br />
                    <Button className="contact-btn" type="submit" variant="dark">Submit form</Button>
                </form>

               
            </div>

            
            <Link  to='/http://mediaday.metropolia.fi/soft2016'>
            <div >
                    <img className="link" src={link} alt="link" />
                    <p className="link-para">METROPOLIA AMMATTIKORKEAKOULU 23.3.2016
VANHA MAANTIE 6, LEPPÄVAARA</p>
                    </div>
                </Link>
            </div>

       
    )
}

export default Contact

