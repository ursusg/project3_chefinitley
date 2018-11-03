import React from "react";
import { Navbar, NavItem, Button, Modal, Row, Input, Col } from "react-materialize";
import ImportedImage from "../../images/Logo(transparent).PNG";
import "./Nav.css";

var Img = <img alt="ime" className="logo" src={ImportedImage} />;

export default () => (
  <Navbar brand={Img} className="grey darken-2 appbar" left>
    
    <NavItem href="/Signup">Chef Account</NavItem>
    <NavItem href="/SignUpCustomer">Customer Account</NavItem>
    <Modal className="center login" header="Log In with your Chefinately Account" trigger={<Button  className="brown">LogIn</Button>}>
      <Row>
        <Col className="center" s={12}>
        <Input  type="email" label="Email" s={6} />
        </Col>
        <Col className="center" s={12}>
        <Input  type="password" label="password" s={6} />
        </Col>
        <Button className="orange" waves='light'>Sign In</Button>
      </Row>
    </Modal>
  </Navbar>
);
