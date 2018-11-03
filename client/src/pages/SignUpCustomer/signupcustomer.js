import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class SignUpCustomer extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };


    render() {
        return (
          <div className="container signups">
          <Row>
            <Input s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            
            <Input type="email" label="Email" s={9} />
            <Input type="password" label="password" s={9} />
            
          </Row>
          </div>
        );
      }
}

export default SignUpCustomer;