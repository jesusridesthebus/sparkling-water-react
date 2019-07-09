import React from 'react';
import PropTypes from 'prop-types';

function Sparkling(props){
  return (
    <div>
        <style global jsx>{`
          div {
            // background-color: yellow;
          }
        `}</style>
      <p><h3>{props.price} - {props.brand}</h3><em>{props.flavor}</em></p>
      <p>{props.description}</p>
      <p>{props.imageUrl}</p>
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
