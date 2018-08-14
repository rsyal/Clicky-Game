import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} id={props.id}  onClick={() => props.clickHandler(props.id)} /> 
    </div>
    <div className="content">
      
    </div>
    
  </div>
);

export default FriendCard;




