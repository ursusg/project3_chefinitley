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
          />
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
          <Input type="textarea" label="Availability" s={6} />
        </Row>

        <Row>
          <Input s={6} type="select" label="City" defaultValue="2">
            <option value="1">Chicago</option>
            <option value="2">Evanston</option>
            <option value="3">Des Plaines</option>
          </Input>

          <Input s={6} type="select" label="Range" defaultValue="2">
            <option value="1">0-5 Miles</option>
            <option value="2">0-10 Miles</option>
            <option value="3">0-15 Miles</option>
          </Input>
        </Row>

        <Row>
          <Button className="orange" onclick={this.formSubmit}>Submit</Button>
        </Row>
      </div>
    );
  }
}

export default SignUpChef;
