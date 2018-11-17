import React from "react";
import {GoogleApiWrapper, Map, Marker, } from 'google-maps-react';
// import API from "../../utils/API";
import "./chefmaps.css";
// import {Row, } from "react-materialize"
// import env from "dotenv"







class MapContainer extends React.Component {
// state ={
//     chefs: [],
//     cheficon:""
// }

// setChefs = res =>
// this.setState({
//   chefs: res.data,

// })

// loadChefs = () => {
//     return API.getChefs().then(res => this.setChefs(res));
//     // .catch(err => console.log(err));
//   };

render() {
    return (

      
        <div>
        <Map  google={this.props.google} zoom={14} className="googmaps">
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 {/* <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
 </InfoWindow> */}
</Map>
</div>
        
        
       



        );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQwAQZf_7mAtyQldl-FNCkI3ymaeuHATs")
  })(MapContainer);