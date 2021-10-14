import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from 'react-bootstrap';
import './login.css';
import Logo from './mediaday.jpg';


function Login() {
    return (
        <div className="login-main">

            <form className="form-main" action="">
                <img className="login-img" src={Logo} alt="logo-img" />
                <h3 className="login-heading">Event Login</h3>
                <input type="text" className="inp" placeholder="Email" required="require" /><br />
                <input type="text" className="inp" placeholder="Password" required="require" /> <br />
                <Link to='/forgot-password'>
                    <small className="forgot-password">Forgot Password?</small>
                </Link>

                <Link to='/home'>
                    <Button variant="success" className="login-btn" type="submit">Login Event</Button>
                </Link>

                <Link to='/register'><br /><br />
                    <small className="no-register">Not Registered yet? Register here.</small>
                </Link>


            </form>


        </div>
    )
}

export default Login
