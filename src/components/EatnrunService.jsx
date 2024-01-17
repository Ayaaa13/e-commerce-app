import React from "react";
import Service from "../data/Service";

const ServiceCards = (props) => {
  return (
    <div className="cardService">
      <img src={props.img} alt="" />
      <h1>{props.process}</h1>
      <p>{props.todo}</p>
    </div>
  );
};

const CreateServiceCard = (ServiceCard) => {
  return (
    <ServiceCards
      key={ServiceCard.id}
      img={ServiceCard.img}
      process={ServiceCard.process}
      todo={ServiceCard.todo}
    />
  );
};

const EatnrunService = () => {
  return (
    <div className="service" id="service">
      <div className="top-service">
        <p>What we Serve?</p>
        <h1>Your Favourite Food Delivery Partner</h1>
      </div>
      <div className="bottom-service">{Service.map(CreateServiceCard)}</div>
    </div>
  );
};

export default EatnrunService;
