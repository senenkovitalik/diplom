import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';

const Footer = () => (
  <Navbar color="dark" dark style={{position: 'absolute', bottom: 0, width: 100+'%'}}>
    <div className="text-center" style={{color: '#ffffff'}}>&reg; 2017 Internet-shop "GuitarShop&trade;" - wonderful music for all!</div>
  </Navbar>
);

export default Footer;