import React from "react";
import { Col, Card } from "react-materialize";

const AboutUs = () => {
  return (
    <div className="container">
      <Col m={6} s={12}>
        <Card
          className="blue-grey darken-1"
          textClassName="white-text"
          title="About Us"
          actions={[<a href="/">Contact Us</a>]}
        >
          Chefinitly provides independent chefs a service to connect with customers who are looking for home-cooked meals. As well as providing chefs with a platform to cater to any number of individuals. 
         A chef can decide whether they’re making a specialty dinner of the day or spending time catering for an event. Customers will be able to specify their need for a specific cuisine and request a specific chef.

        </Card>
      </Col>
    </div>
  );
};



export default AboutUs;
