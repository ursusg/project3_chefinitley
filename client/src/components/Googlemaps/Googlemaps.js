import React from "react";
import {GoogleApiWrapper,  Map, Marker} from 'google-maps-react';
import API from "../../utils/API";
import "./Googlemaps.css";







class MapContainer extends React.Component {
   

    state = {
    chefs: [],
    cheficon:"",
    selectedChef: false
    };



    componentDidMount() {
       this.loadChefs();
   
      }

      handleClick = (chef, event) => {
        // console.log({ marker })
        this.setState({ selectedChef: chef })
      }
      loadChefs = () => {
        return API.getChefs().then(res => this.setChefs(res));
        // .catch(err => console.log(err));
      };
  

setChefs = res =>
this.setState({
  chefs: res.data,
  
})



// loadChefs = () => {
//     return API.getChefs().then(res => this.setChefs(res));
//     // .catch(err => console.log(err));
//   };
 
render() {

    return (
         
      <Map  defaultCenter={{ lat: 29.5, lng: -95 }}  zoom={10} google={this.props.google} >
    <Marker
    position = {{ lng: this.props.longitude, lat: this.props.latitude}}
    name="chefs"
    key={this.props._id}
    >

        
    </Marker>
          
     
   
       </ Map>

    
      
        
       
   
   
       
    
       
        
    )
}
}
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQwAQZf_7mAtyQldl-FNCkI3ymaeuHATs")
  })(MapContainer);
  