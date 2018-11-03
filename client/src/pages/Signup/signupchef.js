import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";
import API from "../../utils/API";
import "./signupchef.css";

class SignUpChef extends Component {
  state = {
    chefName: "",
    email: "",
    password: "",
    foods: [],
    description: "",
    availability: "",
    city: "",
    range: ""
  };

  // Function declarations for how this component works
  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");
  
    event.preventDefault()

    var chefData = {
      chefName: this.state.chefName,
      email: this.state.email,
      password: this.state.password,
      foods: this.state.foods,
      description: this.state.description,
      availability: this.state.availability,
      city: this.state.city,
      range: this.state.range
    }

    console.log(this.state)
    API.saveChef({
      chefData
    })
      .then(res => console.log(res))
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
      <div className="container signups">
        <Row>
          <Input s={6} label="Name" />
        </Row>
        <Row s={12}>
          <Input type="email" label="Email" s={6} />
        </Row>
        <Row>
          <Input type="password" label="Password" s={6} />
        </Row>

        <Row>
          <Input
            type="file"
            label="File"
           
            s={12}
            multiple
            placeholder="Upload one or more files"
            >
            </Input>
        </Row>

        {/* <Row>
          <Input type="textarea" label="Description" s={5} />
          <Button
            floating
            small
            className="orange addbtn"
            waves="light"
            icon="add"
            s={2}
          />
        </Row> */}

        <Row>
          <Input type="textarea" label="Availability" s={6}/>
        </Row>

        <Row>
          <Input s={6} type="select" label="City" defaultValue="2"/>
          <Input onChange={this.handleInputChange} s={6} label="Chef Name" name="chefName" />
          <Input onChange={this.handleInputChange} type="email" label="Email" s={12} name="email" />
          <Input onChange={this.handleInputChange} type="password" label="password" s={12} name="password" />
        </Row>

        <Row>
          <Input type="textarea" label="Menu" name="foods"/>
          <Input onChange={this.handleInputChange} type="textarea" label="Description" name="description" />
          <Input onChange={this.handleInputChange} type="textarea" label="Availability" name="availability" />
        </Row>

        <Row>
          <Input onChange={this.handleInputChange} s={12} type="select" label="City" defaultValue="2" name="city">
            <option value="1">Chicago</option>
            <option value="2">Evanston</option>
            <option value="3">Des Plaines</option>
          </Input>

          <Input onChange={this.handleInputChange} s={12} type="select" label="Range" defaultValue="2" name="range">
            <option value="1">0-5 Miles</option>
            <option value="2">0-10 Miles</option>
            <option value="3">0-15 Miles</option>
          </Input>
        </Row>

        <Row>
          <Button className="orange" onClick={this.formSubmit}>Submit</Button>
        </Row>
        
      </div>
    );
  }
}

export default SignUpChef;
