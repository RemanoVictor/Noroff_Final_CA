import React from "react";

const Cardspecific = props => {
  return (
    <div className="[ col-sm-8 ] [ card ]">
      <h3> Name: {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p>Colour: {props.colour}</p>
      <p>Rarity: {props.rarity}</p>
      <p> About: {props.about}</p>
    </div>
  );
};

export default Cardspecific;
