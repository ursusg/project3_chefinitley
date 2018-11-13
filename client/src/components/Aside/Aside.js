import React, {Component} from "react";
import { Col, Row, Input,  Icon, Section, Button, List, ListItem} from "react-materialize";
import  "./Aside.css"
import API from "../../utils/API"

class Dashboard extends Component {

    state = {
        chefs: [],
        cuisine: "",
        city: ""
      };
    
      componentDidMount() {
        this.loadChefs();
      }
    
      loadChefs = () => {
        API.getChefs()
          .then(res => this.setState({ chefs: res.data }))
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
<Section className="center">
  <Row className='left'>
    <Col l={12} className="num1">
    
      
   <Col s= {3} className="aside left num2 container">
    <img className="boxlogo" src="https://i.postimg.cc/SNYBDm9j/Chefinatley-Icon.png" alt="cheflogo"></img>
    <h2 className="order">Order Now</h2>
    <Col s={12} className="center">
   

    </Col>
    <Col s={12} className="center carry-pickup">
    <Input label="city">
    </Input>
    </Col>
    <Col s={12} className="center carry-pickup">
    <Input label="cuisine">
    </Input>
    <Button onClick={() => this.handleFormSubmit}  className="orange">Submit</Button>
    </Col>
    <Col s={12} className="center carry-pickup">
    <Button className="brown" name="Pickup">
    Pickup
    </Button>
    <Button className="brown" name="Delivery">
    Delivery
    </Button>
    </Col>
    <Col s={12} className="center carry-pickup" >
   <Col s={4}><Button onClick={() => this.handleFormSubmit} className="orange" ><Icon>$</Icon></Button></Col>
   <Col s={4}><Button onClick={() => this.handleFormSubmit} className="orange"><Icon>$$</Icon></Button></Col>
   <Col s={4}><Button onClick={() => this.handleFormSubmit} className="orange"><Icon>$$$</Icon></Button></Col>
   
    </Col>
    <Col s={12} className="center carry-pickup">
   <Col s={4}><Button className="orange"><Icon>star_border</Icon></Button></Col>
   <Col s={4}><Button className="orange"><Icon>star_half</Icon></Button></Col>
   <Col s={4}><Button className="orange"><Icon>star</Icon></Button></Col>
   
    </Col>

 </Col>
 <Col s={9}> <h1>Chefs</h1></Col>
   <Col s={9}>
   <p>Local Chefs near you</p>
   </Col>
  <Col s={9}>
   <p>Local Delivery Chefs Near you</p>
   </Col>
   {this.state.chefs.length ? (
              <List>
                {this.state.chefs.map(chef => (
                  <ListItem key={chef._id}>
                  <img src={chef.profilepic} ></img>
                    <a href={"/chefs/" + chef._id}>
                      <strong>
                        {chef.name} by {chef.city}
                      </strong>
                    </a>
                   
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
   
   
   
   
   
   
   
   </Col>
   
   
   
   
    
  </Row>
</Section>

);
}
}

export default Dashboard
