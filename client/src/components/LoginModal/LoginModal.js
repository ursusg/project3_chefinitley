import React, { Component } from 'react';
import { Button, Modal, Row, Input, Col } from "react-materialize";
// import { Link } from "react-router-dom";
import fire from "../../config/Fire"

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {
            email: "",
            password: "",
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    login(event) {
        event.preventDefault();

        console.log(this.state.email)

        fire.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .then(user => { console.log(user) })
            .catch(error => { console.log(error) })
    };

    signup(event) {
        event.preventDefault();

        fire.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .then((u) => { console.log(u) })
            .catch((error) => { console.log(error) })
    };

    render() {
        return (
            <Modal 
            className="center login" 
            header="Log In with your Chefinately Account" 
            trigger={<Button className="brown">LogIn</Button>}
            >
                <Row>
                    <Col className="center" s={12}>
                        <Input 
                            type="email" 
                            label="Email"
                            name="email"
                            onChange={this.handleInputChange} 
                            s={6} />
                    </Col>
                    <Col className="center" s={12}>
                        <Input 
                            type="password" 
                            label="Password"
                            name="password"
                            onChange={this.handleInputChange}
                            s={6} />
                    </Col>
                    <Button 
                        className="orange" 
                        waves='light'
                        onClick={this.login}
                        >
                        Sign In
                        </Button>
                </Row>
            </Modal>
        )

    };
}

export default LoginModal;