import React, { Component } from 'react';
import { Button } from "react-materialize";
// import { Link } from "react-router-dom";
import fire from "../../config/Fire"

class LogoutBtn extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)

    }
    
    logout () {
        fire.auth().signOut();
    }

    render() {
        return (
            <Button
            className="red btn-small"
            onClick={this.logout}
            >
            Logout
            </Button>
        )
    }
}
export default LogoutBtn;