import React, { Component } from 'react';
import { Module } from 'react-materialize'
import { Link } from "react-router-dom";
import fire from "../config/Fire"

class LoginModule extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {
            email: "",
            password: "",
        }
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: e.target.value
        })
    };

    loggingIn(event) {
        event.preventDefault();

        fire.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
        .then(user => {console.log(user)})
        .catch(error => {console.log(error)})
    };

    signup(event){
        event.preventDefault();

        fire.auth().createUserWithEmailAndPassword(
            this.state.email, 
            this.state.password
        )
        .then((u)=>{console.log(u)})
        .catch((error) => {console.log(error)})
    };

    render() {
        return
        <Modal className="center login" header="Log In with your Chefinately Account" trigger={<Button className="brown">LogIn</Button>}>
            <Row>
                <Col className="center" s={12}>
                    <Input type="email" label="Email" s={6} />
                </Col>
                <Col className="center" s={12}>
                    <Input type="password" label="Password" s={6} />
                </Col>
                <Button className="orange" waves='light'>Sign In</Button>
            </Row>
        </Modal>
    }
}

export default LoginModule;