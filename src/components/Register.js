import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import React from 'react'
import Logo from './mediaday.jpg';
import './signup.css';

function Register() {
    return (
        <div>
            <div className="signup_main">
                
                <legend className="signup_legend" >Event Registration</legend>

               
                <div className="form_div">
                    <form action="#">

                    <img className="signup_img" src={Logo} alt="img" /><br />

                        <input type="email" className="input_s1" autoComplete="off" placeholder="Email" required="require" />

                        <input type="text" className="input_s2" autoComplete="off" placeholder="Country" required="require" />
                        <br />
                        <input type="number" className="input_s3" autoComplete="off" placeholder="Contact No." required="require"/>

                        <input type="password" className="input_s4" autoComplete="off" placeholder="Password" required="require" />
                        <br />

                        <Button type="submit" className="signup_btn" variant="success">Register User</Button><br /><br />

                        <Link className="signup_link" to='/'> <small>Already Registered? login here</small> </Link>


                    </form>
                </div>
                
                
            </div>
        </div>
    )
}

export default Register

