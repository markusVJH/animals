import React from "react";
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="imgContainer"></div>
      <h1>{props.name}</h1>
      <div className="likes">
        <span className="likesCount">{props.likes}</span>
        <button className="dislikeBtn" onClick={props.onDislike}>
         -
        </button>
        <button className="likeBtn" onClick={props.onLike}>
          +
        </button>
        <button className="removeBtn" onClick={props.onRemove}>
        x
        </button>
      </div>
    </div>
  )
};


export default Card;