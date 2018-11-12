import React, { Component } from 'react';
import Carousel from "../../components/Carousel"
import API from "../../utils/API";
import Aside from "../../components/Aside";
import {Col, Row, Input, Button} from "react-materialize"
import "./Dashboard.css"



class Dashboard extends Component {

  state = {
    chefName: "",
    email: "",
    password: "",
    foods: [],
    description: "",
    availability: "",
    city: "",
    range: "",
    API: "",
    chefs: "",
    cuisine:""
  };

  loadChefs = () => {
    API.getChefs()
      .then(res =>
        this.setState({
          chefData: res.data,
          chefName: "",
          email: "",
          foods: [],
          description: "",
          city: "",
          range: ""
        })
      )
      .catch(err => console.log(err));
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.city && this.state.cuisine) {
      API.getChefs({
        city: this.state.city,
        cuisine: this.state.cuisine,
         })
        .then(res => this.loadChefs())
        .catch(err => console.log(err));
    }
  };

  


  render() {
    return (
      <div>
        <Aside ClassName="aside">
          
        </Aside>
        <Carousel/>
  
   
        
     
        

        {/* <Card /> */}
        {/* <Footer /> */}

        </div>
    )
  }
}
  
  export default Dashboard;