import React, { Component } from "react";
import { Row, Input, Button, Col, Section } from "react-materialize";
import API from "../../utils/API";
import "./signupchef.css";

class SignUpChef extends Component {
  state = {
    chefName: "",
    email: "",
    password: "",
    city: "",
    bio: "",
    availability: "",
    range: ""
    // menu: null
  };

  // Function declarations for how this component works
  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");

    let chefData = {
      chefName: this.state.chefName,
      email: this.state.email,
      password: this.state.password,
      // foods: this.state.foods,
      bio: this.state.bio,
      availability: this.state.availability,
      city: this.state.city,
      range: this.state.range
      // menu: this.state.menu
    }

    console.log(chefData)
    API.saveChef(
      chefData
    )
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
      <Section className="center">
      <form className="container signups" >
          <Row className="signup container">
            <Col className="left" s={6} m={6}>
            <Input s={12} 
                label="Name" 
                onChange={(event) => this.handleInputChange(event)} 
                name="chefName"
                // value={this.state.chefName}
            />
           
         
         
            <Input 
                type="email"
                label="Email" 
                s={12} 
                name="email"
                onChange={(event) => this.handleInputChange(event)} 
            />
          
     
            <Input 
                type="password" 
                label="Password" 
                s={12} 
                name="password"
                onChange={(event) => this.handleInputChange(event)}
            />
         

        
          <Input 
              label="Bio" 
              s={12} 
              name="bio"
              onChange={(event) => this.handleInputChange(event)}
          />
         
            <Input 
                label="Availability" 
                s={12} 
                name="availability"
                onChange={(event) => this.handleInputChange(event)} 
              />
         
            <Input 
                s={12} 
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
                s={12} 
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
           <Row>
            <Input
              type="file"
              label="Menu upload" 
              s={12}
              multiple
              placeholder="(REQUIRED) Keep under 16MB"
              readOnly
              name="menu"
              // onChange={(event) => this.handleInputChange(event)}
            />
         
            <Button className="orange" onClick={(event) => this.formSubmit (event)}>Submit</Button>
          </Row>
           </Col >

           <Col s={6} className="rowwood right">
        <img className="chefwood" src="https://i.postimg.cc/SK1MmdBT/chefinately-wood.png" alt="chefinatelylogo"></img>
        </Col>
          </Row>
      </form>
      </Section>
    );
  }
}

export default SignUpChef;
