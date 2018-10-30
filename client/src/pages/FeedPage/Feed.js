import React from 'react';
import { Col, Card } from "react-materialize";
import Feed from "../../components/Feed"

class Login extends Component {
    state = {
        username: "",
        password: "",
    }

    render() {
        return (
            <Feed />
        )
    }
}