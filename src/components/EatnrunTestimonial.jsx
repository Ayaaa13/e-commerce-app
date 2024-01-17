import React from "react";
import UserTestimonyData from "../data/UserTestimonyData";

const UserTestimony = (props) => {
  return (
    <div className="what-user-says">
      <div className="testimony">
        <div className="testimonial-content">
          <div className="overlap-group">
            <h1 className="text-wrapper">“</h1>
            <p className="i-can-t-express-how">{props.comment}</p>
          </div>
        </div>
        <div className="nameAndReview">
          <div className="nameAndProfile">
            <img className="user-profile" alt="User profile" src={props.img} />
            <h2 className="name">{props.name}</h2>
          </div>

          <p className="testimonial-review">
            {props.review}
            <i className="fa-solid fa-star"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

const NewUserTestimony = (testimony) => {
  return (
    <UserTestimony
      key={testimony.id}
      img={testimony.img}
      name={testimony.name}
      comment={testimony.comment}
      review={testimony.review}
    />
  );
};

const EatnrunTestimonial = () => {
  return (
    <div className="testimonial" id="testimonial">
      <div className="whatTheySay">
        <p>What they Say</p>
        <h1>What Our Customer Say About Us</h1>
      </div>
      <div className="allUsers">{UserTestimonyData.map(NewUserTestimony)}</div>
    </div>
  );
};

export default EatnrunTestimonial;
