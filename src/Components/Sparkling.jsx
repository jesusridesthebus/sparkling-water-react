import React from 'react';
import PropTypes from 'prop-types';

function Sparkling(props){
  return (
    <div>
      <h3>${props.price} - {props.brand}</h3><em>{props.flavor}</em>
      <br/>
      {props.description}
      <br/>
      {props.imageUrl}
      <hr/>
    </div>
  );
}

Sparkling.propTypes = {
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Sparkling;
