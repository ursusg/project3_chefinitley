import React, {Component} from 'react';
 import Carousel from "../../components/Carousel";
import Search from "../../components/Input";
// import Footer from "../../components/Footer";
import Icons from "../../components/Icons";
// import Card from "../../components/Card"

import Card from "../../components/Card"
import API from "../../utils/API"





class Home extends Component {
  state ={
    city:"",
    cuisine:"",
    API,
  }

  render() {
    return (
      <div>
        <Carousel/>
        <Search 
        
        />
        <Icons />
        <Card />
        {/* <Footer /> */}

        {/* <Card /> */}
        {/* <Footer /> */}

        </div>
    )
  }
}
  
  export default Home;