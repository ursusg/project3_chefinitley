import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
// import "./signupchef.css";

class SignUpCustomer extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");

    let userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      // foods: this.state.foods,
      // bio: this.state.bio,
      // availability: this.state.availability,
      // city: this.state.city
      // range: this.state.range
      // menu: this.state.menu
    }

    console.log(userData);
    API.saveUser(
      userData
    )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form className="container signups" >
        <Row>
          <Input s={6}
            label="Name"
            onChange={(event) => this.handleInputChange(event)}
            name="firstname"
          // value={this.state.chefName}
          />
        </Row>
        
        <Row>
          <Input
            label="lastname"
            s={12}
            name="lastname"
            onChange={(event) => this.handleInputChange(event)}
          />
        </Row>

        <Row s={12}>
          <Input
            type="email"
            label="Email"
            s={6}
            name="email"
            onChange={(event) => this.handleInputChange(event)}
          />
        </Row>
        <Row>
          <Input
            type="password"
            label="Password"
            s={6}
            name="password"
            onChange={(event) => this.handleInputChange(event)}
          />
        </Row>

        <Row>
          <Button className="orange" onClick={(event) => this.formSubmit(event)}>Submit</Button>
        </Row>
      </form>
    );
  }
}

export default SignUpCustomer;