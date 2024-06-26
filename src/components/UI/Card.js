import React from 'react';
import '../UI/Card.css';
export const Card = (props) => {
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}
export default Card;
