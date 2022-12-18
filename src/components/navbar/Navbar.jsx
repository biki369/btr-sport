import React, { useEffect, useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

const NavbarB = () => {
    const oaNavBarRootRef = useRef();
    const oaNavBarBgRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', (event) => {

            if (window.scrollY >= 10) {
                oaNavBarRootRef && oaNavBarRootRef.current && oaNavBarRootRef.current.classList.add("navbar-sticky");
            } else {
                oaNavBarRootRef && oaNavBarRootRef.current && oaNavBarRootRef.current.classList.remove("navbar-sticky");
            }
        });
    })

    const width = window.innerWidth;
    const breakpoint = 960;
    // {
    //     width < breakpoint ? "" : <>
    //         <p className="access">i am now accessing as a:</p>
    //     </>
    // }


    return (
        <div className="mt-4" >
            <Navbar className="navbarCustom" expand="lg" ref={oaNavBarRootRef}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="main">Main</Nav.Link>
                            <Nav.Link href="#home" className="home"><i className='bx bxs-home'></i></Nav.Link>
                            <NavDropdown title="Organisations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Organisations</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Information & Service" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Information & Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Documents" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Documents</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Contact</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                    {
                            width < breakpoint ? <><div className="r-content">
                                <input type="text" placeholder="Search" />
                                <button><i className='bx bx-search-alt'></i></button>
                            </div></> : ""

                        }
                </Container>
            </Navbar>
        </div>

    )
}

export default NavbarB;