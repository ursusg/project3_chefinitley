import React from "react";
import { Col, Card, Collection, CollectionItem } from "react-materialize";
import "./startup.css";

const StartUp = () => {
  return (
    <div className="container signups">
      <h4 className="center">How to get Started with Chefinately</h4>
      
      <Collection href="/" header="Chefs">
        <CollectionItem href="/">Food Service Sanitation Certificate</CollectionItem>
        <CollectionItem href="/">Shared Kitchen Link</CollectionItem>
        <CollectionItem href="/">Certificate of Insurance</CollectionItem>
        <CollectionItem href="/">Pick a Kitchen from the list</CollectionItem>
      </Collection>


      {/* <Collection header="Customers">
        <CollectionItem >Pick a Chef </CollectionItem>
        <CollectionItem >Pick a Kitchen</CollectionItem>
        <CollectionItem ></CollectionItem>
        <CollectionItem ></CollectionItem>
      </Collection> */}


      
    </div>
  );
};

export default StartUp;

{
  /* <Col m={6} s={12}>
        <Card
          //   className="blue-grey darken-1"
          //   textClassName="white-text"
          title="Chefs"
          actions={[<a href="#">This is a link</a>]}
        >
          <Collection header="First Names">
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
          </Collection>
        </Card>
      </Col> */
}
