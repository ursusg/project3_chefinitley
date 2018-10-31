import React, { Component } from "react";
import { Row, Input } from "react-materialize";

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

  render() {
    return (
      <div className="container">
        <Row>
          <Input s={6} label="Chef Name" />
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
        </Row>

        <Row>
          <Input type="textarea" label="Menu" />
          <Input type="textarea" label="Description" />
          <Input type="textarea" label="Availability" />
        </Row>

        <Row>
          <Input s={12} type="select" label="City" defaultValue="2">
            <option value="1">Chicago</option>
            <option value="2">Evanston</option>
            <option value="3">Des Plaines</option>
          </Input>

          <Input s={12} type="select" label="Range" defaultValue="2">
            <option value="1">0-5 Miles</option>
            <option value="2">5-10 Miles</option>
            <option value="3">10-15 Miles</option>
          </Input>
        </Row>
      </div>
    );
  }
}

export default SignUpChef;
