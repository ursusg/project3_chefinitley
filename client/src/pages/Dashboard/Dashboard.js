import React, { Component } from 'react';
 import Carousel from "../../components/Carousel";
import Search from "../../components/Input";
// import Footer from "../../components/Footer";
import Icons from "../../components/Icons";
// import Card from "../../components/Card"
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import API from "../../utils/API";
import Aside from "../../components/Aside";





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
    chefs: ""
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

  


  render() {
    return (
      <div>
        <Aside>
          
        </Aside>
        <Carousel/>
        <Search />
        <Icons />
        <Card />
        <Footer />

        {/* <Card /> */}
        {/* <Footer /> */}

        </div>
    )
  }
}
  
  export default Dashboard;