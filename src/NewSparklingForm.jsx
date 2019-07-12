import React from 'react';
import PropTypes from 'prop-types';
import './NewSparkling.css';

function NewSparklingForm(props){
  let _price = null;
  let _brand = null;
  let _flavor = null;
  let _description = null;
  let _imageUrl = null;

  function handleNewSparklingSub(event) {
    event.preventDefault();
    props.onNewSparklingCreation({price: _price.value, brand: _brand.value, flavor: _flavor.value, description: _description.value, imageUrl: _imageUrl.value});
    _price.value = '';
    _brand.value = '';
    _flavor.value = '';
    _description.value = '';
    _imageUrl.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewSparklingSub}>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
          <br/>
        <input
          type='text'
          id='flavor'
          placeholder='Flavor'
          ref={(input) => {_flavor = input;}}/>
          <br/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
          <br/>
        <textarea
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
          <br/>
        <input
          type='text'
          id='picture'
          placeholder='URL link to picture'
          ref={(input) => {_imageUrl = input;}}/>
          <br/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewSparklingForm;
