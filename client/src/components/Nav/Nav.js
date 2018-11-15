import React from "react";
import { Navbar, NavItem, Button, Modal, Row, Input, Col } from "react-materialize";
import ImportedImage from "../../images/Logo(transparent).PNG";
import "./Nav.css";
import LoginModule from "./LoginModule"

var Img = <img alt="ime" className="logo" src={ImportedImage} />;

export default () => (
  <Navbar brand={Img} className="grey darken-2 appbar" left>
    
    <NavItem href="/Signup">Chef Account</NavItem>
    <NavItem href="/SignUpCustomer">Customer Account</NavItem>
    <NavItem href="/StartUpGuide">StartUp Guide</NavItem>
    <LoginModule/>
    
  </Navbar>
);
