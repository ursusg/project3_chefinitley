import React, {Component} from "react";
import { Col, Row, Input, Container, Icon, Section, Button, List, ListItem} from "react-materialize";
import  "./Aside.css"
import API from "../../utils/API"

class Dashboard extends Component {

    state = {
        chefs: []
      };
    
      componentDidMount() {
        this.loadChefs();
      }
    
      loadChefs = () => {
        API.getChefs()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };


    render() {
        return (
<Section>
  <Row className=''>
    <Col l={12} className="num1">
    
      
   <Col s= {3} className="aside left num2">
   <Icon large>pizza</Icon>
    <h2 className="order">Order Now</h2>
    <Col s={12} className="center">
   

    </Col>
    <Col s={12} className="center carry-pickup">
    <Input label="city">
    </Input>
    </Col>
    <Col s={12} className="carry-pickup">
    <Input label="cuisine">
    </Input>
    <Button className="orange">Submit</Button>
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
   <Col s={4}><Button className="orange" ><Icon>$</Icon></Button></Col>
   <Col s={4}><Button className="orange"><Icon>$$</Icon></Button></Col>
   <Col s={4}><Button className="orange"><Icon>$$$</Icon></Button></Col>
   
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
