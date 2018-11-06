import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";
import API from "../../utils/API";
import "./signupchef.css";

class SignUpChef extends Component {
  state = {
    chefName: "",
    email: "",
    password: "",
    city: "",
    bio: "",
    foods: [],
    availability: "",
    range: ""
  };

  // Function declarations for how this component works
  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");

    let chefData = {
      chefName: this.state.chefName,
      email: this.state.email,
      password: this.state.password,
      foods: this.state.foods,
      bio: this.state.bio,
      availability: this.state.availability,
      city: this.state.city,
      range: this.state.range
    }

    console.log(chefData)
    API.saveChef({
      chefData
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  uploadFile = () => {
    console.log("Added a file!")
  }

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
                name="chefName"
                value={this.state.chefName}
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
          <Input 
              type="textarea" 
              label="Bio" 
              s={12} 
              name="bio"
              onChange={(event) => this.handleInputChange(event)}
          />
          </Row>

          <Row>
            <Input 
                type="textarea" 
                label="Availability" 
                s={6} 
                name="availability"
                onChange={(event) => this.handleInputChange(event)} 
              />
          </Row>

          <Row>
            <Input 
                s={6} 
                type="select" 
                label="City" 
                // defaultValue="2" 
                onChange={(event) => this.handleInputChange(event)}
                name="city"
            >
              <option value="Chicago">Chicago</option>
              <option value="Evanston">Evanston</option>
              <option value="Des Plaines">Des Plaines</option>
            </Input>

            <Input 
                s={6} 
                type="select" 
                label="Range" 
                // defaultValue="2" 
                onChange={(event) => this.handleInputChange(event)} 
                name="range"
            >
              <option value="5">0-5 Miles</option>
              <option value="10">0-10 Miles</option>
              <option value="15">0-15 Miles</option>
            </Input>
          </Row>

          <Row>
            <Input
              type="file"
              label="Menu upload"
              s={12}
              multiple
              placeholder="(REQUIRED) Keep under 16MB"
              readOnly
              name="foods"
              // onChange={(event) => this.handleInputChange(event)}
            />
          </Row>

          <Row>
            <Button className="orange" onClick={(event) => this.formSubmit (event)}>Submit</Button>
          </Row>
      </form>
    );
  }
}

export default SignUpChef;
