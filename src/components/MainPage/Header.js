import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import './main.css';
import Logo from './metropolia_m_oranssi.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (

        <div >
            <Navbar className="top-headerbar " >
                <Container>
                    <Navbar.Brand >
                        <Link className="bar-para mx-2 text-dark" to="/home" >
                            <img
                                alt=""
                                src={Logo}
                                width="80"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}
                           
                        </Link>

                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item className="bar-para">
                            <NavLink className="bar-para text-dark" to="/home" activeClassName="selected" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} >
                                Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="bar-para">
                            <NavLink className="bar-para text-dark" to="/calender" activeClassName="selected" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                Schedule
                            </NavLink>
                        </Nav.Item>
                        <input type="text" placeholder="Search here" className="search" />
                        <Button className="mx-2 " style={{ height: '40px', marginTop: '5px' }} variant="dark">Search</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>







        // <div>
        //     <div className="top-headerbar">

        //         <Link to="/home" className="bar-para hover:text-primary">   <img style={{ width: '70px' }} className="img-size" src={Logo} alt="logoimg" /></Link>

        // <Nav.Item id="navbar" className="bar-para">
        //     <NavLink className="bar-para" to="/home" activeClassName="selected" >
        //         Home
        //     </NavLink>
        // </Nav.Item>
        // <Nav.Item id="navbar" className="bar-para">
        //     <NavLink className="bar-para" to="/calender" activeClassName="selected">
        //         Schedule
        //     </NavLink>
        // </Nav.Item>
        // <input type="text" placeholder="Search here" className="search" />
        // <Button className="mx-2" style={{ height: '40px', marginTop: '5px' }} variant="dark">Search</Button>

        //     </div><br /><br />

        // </div>
    )
}

export default Header
