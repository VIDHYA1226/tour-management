import React from "react";
import "./footer.css";

import {Container, Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links=[
    {
        path:'/home',
        display:'Home',
    },
    {
        path:'/about',
        display:'About',
    },
    {
        path: '/tours',
        display:'Tours',
    },
];

const quick__links2=[
    {
        path:'/gallery',
        display:'Gallery',
    },
    {
        path:'/login',
        display:'Login',
    },
    {
        path: '/register',
        display:'Register',
    },
];


const Footer= ( ) =>{

    const year=new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>"Tour World" is a tour booking website that allows travelers to explore and book a variety of tours worldwide. The platform offers detailed itineraries, customer reviews, and exclusive deals on packages for different interests, including adventure, relaxation, and culture. With an easy-to-use interface, users can quickly find and book their perfect tour, checking availability and making secure payments. Whether you're planning a peaceful retreat or an exciting adventure, "Tour World" simplifies the travel planning process.</p>
                        <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'>
                                <i class="ri-youtube-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                <i class="ri-github-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                <i class="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                <i class="ri-instagram-line"></i>
                                </Link>
                            </span>
                        </div>
                    </div>
                    </Col>

                    <Col lg="3">
                    <h5 className="footer__link-title">Discover</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item,index)=> (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                    </Col>
                    <Col lg="3">
                    <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links2.map((item,index)=> (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup></Col>
                    <Col lg="3">
                    <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-map-pin-line"></i></span>
                                        Address:
                                    </h6>
                                    <p className="mb-0">Chennai, India</p>
                                </ListGroupItem>
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-mail-line"></i></span>
                                        Email:
                                    </h6>
                                    <p className="mb-0">travelworld@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone :
                                    </h6>
                                    <p className="mb-0">+91 87987 00011</p>
                                </ListGroupItem>

                    </ListGroup>
                   </Col>

                   <Col lg="12" className="text-center pt-5">
                   <p className="copyright">Copyright {year}, design and develop by Travelworld. All rights reserved.</p>
                   </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;