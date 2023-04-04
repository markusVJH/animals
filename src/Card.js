import React from "react";
import './Card.css';

const Card = (props) => {
  const imgUrl = `https://source.unsplash.com/500x400/?${props.name}`;

  return (
    <div className="card">
      <div className="imgContainer" style={{ background: `url(${imgUrl}) center/cover` }}>
      </div>
      <h1 className="name">{props.name}</h1>
      <div className="likes">
        <button onClick={props.onDislike}>-</button>
        <span className="likesCount">{props.likes}</span>
        <button onClick={props.onLike}>+</button>
      </div>
      <button className="removeBtn" onClick={props.onRemove}>x</button>
    </div>
  );
};

export default Card;