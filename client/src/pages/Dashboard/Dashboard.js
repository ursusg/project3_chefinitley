import React from "react";
import API from "../../utils/API";
import "./Dashboard.css";


import {
  Col,
  Row,
  Input,
  Icon,
  Section,
  Button,
  Collection,
  CollectionItem,
  Chip,
 
  
  
  } from "react-materialize";
  
  import StarRating from 'react-star-ratings';
  import GoogleMaps from "../../components/Googlemaps";

  

class userInterface extends React.Component {
  state = {
    chefs: [],
    chefName: "",
    email: "",
    password: "",
    description: "",
    availability: true,
    city: "",
    range: "",
    foodimg: "",
    profilepic: "",
    cuisines: [],
    image:"",
    cuisine:"",
    longitude:"",
    latitude:""
  
  };

  componentDidMount() {
    this.loadChefs();
    this.loadCuisines();
  }
 setCuisines = res =>  
  this.setState({ 
    cuisines: res.data,
    cuisine: "",
    image:"",
    
  }); 

  loadCuisines = () => {
    API.getCuisines() 
      .then(res => this.setCuisines(res)
        
      )
      .catch(err => console.log(err));
  };

  

  setChefs = res =>
    this.setState({
      chefs: res.data,
      description: "",
      availability: "",
      city: "",
      range: "",
      chefName: "",
      email: "",
      cuisines: "",
      foodimg: "",
      profilepic: "",
      longitude:"",
    latitude:""
    });

  loadChefs = () => {
    return API.getChefs().then(res => this.setChefs(res));
    // .catch(err => console.log(err));
  };
  loadChefsCity = () => {
    return API.getChefs().then(res => this.setChefs(res));
    // .catch(err => console.log(err));
  };
  

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.city && this.state.cuisine) {
      
      
      API.findCityCuisine({
        city: this.state.city,
        cuisine: this.state.cuisine
      })
        .then(res => 

          this.loadChefsCity()
          )
        .catch(err => console.log(err));
    }
  };

  render() {
  
    
    
   
    return (
  
      <Section className="center">
        <Row className="left">
          <Col l={12} className="num1">
            <Col s={3} className="aside left num2 container">
              <img
                className="boxlogo"
                src="https://i.postimg.cc/SNYBDm9j/Chefinatley-Icon.png"
                alt="cheflogo"
              />
              <h3 className="order">Order Now</h3>
              <Col s={12} className="center" />
              <Col s={12} className="center carry-pickup">
                <Input label="city" />
              </Col>
              <Col s={12} className="center carry-pickup">
                <Input label="cuisine" />
                <Button 
                  onClick={() => this.handleFormSubmit}
                  className="orange"
                >
                  Submit
                </Button>
              </Col>
              <Col s={12} className="center carry-pickup">
                <Button className="brown pickup" name="Pickup">
                  Pickup
                </Button>
                <Button className="brown delivery" name="Delivery">
                  Delivery
                </Button>
              </Col>
              <Col s={12} className="center carry-pickup">
              
                <Col s={6}>
                  <Button
                    onClick={() => this.handleFormSubmit}
                    className="orange prices"
                  >
                    High
                  </Button>
                </Col>
                <Col s={6}>
                  <Button
                    onClick={() => this.handleFormSubmit}
                    className="orange prices"
                  >
                    Low
                  </Button>
                </Col>
              </Col>
              <Col s={12} className="center carry-pickup">
                 <Col s={6}>
                  <Button className="orange">
                    <Icon>star_half</Icon>
                  </Button>
                </Col>
                <Col s={6}>
                  <Button className="orange">
                    <Icon>star</Icon>
                  </Button>
                </Col>
              </Col>
            </Col>
            <Col  />
            <Col >
            
              
            </Col>
            <Col s={9}>
            {this.state.chefs.length ? (   
            <Collection>
            {this.state.chefs.map(chef =>   (    
  <CollectionItem  key={chef._id} className="avatar" href='/chefs/:id'>{chef.chefName}
  <img className="circle" src={chef.profilepic} alt="chefpic"></img>
  <img className="chefwoodlogo" alt="logo" src="https://i.postimg.cc/SK1MmdBT/chefinately-wood.png"></img>
  <Col className="center" s ={9}>
      <p className="cuisineslist">{chef.cuisines}</p>
      </Col>
      <Col className="center" s ={9}>
      <p>{chef.city} </p>
      <StarRating 
          numberOfStars={5}
          name='rating'
          starRatedColor="gold"
          starDimension="15px"
          rating={chef.rating}
          
         />
      </Col>
     
  </CollectionItem>

))}
</Collection>
) : ( 
  <h3> No results</h3>
    )}
   
            </Col>
           
         {this.state.cuisines.length ? (    
            <Row s={9} className="cuisines">
         {this.state.cuisines.map(cuisine => (   
  <Col className="chipcol"s={2} key={cuisine._id} >
    <Chip className="chip large" key={cuisine._id}>
      <img src={cuisine.image} alt='Cuisine Type' />
     {cuisine.cuisine}
    </Chip>
   
    
  </Col>
  ) )}
 
</Row>
     ) : ( 
      <h3>No results</h3>
     )} 
     <Row s={12} className="orders" >
     
     
     
     
     </Row>
    

     <Row s={12} className="center">
     
     <GoogleMaps>
     
        

     
     </GoogleMaps>
         
    
   



    
   </Row> 
              

           </Col>
        </Row>
       </Section>
     
    );
  }
}

export default userInterface;

