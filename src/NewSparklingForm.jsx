import React from 'react';
import './NewSparkling.css';

function NewSparklingForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
          <br/>
        <input
          type='text'
          id='flavor'
          placeholder='Flavor'/>
          <br/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
          <br/>
        <textarea
          id='description'
          placeholder='Description'/>
          <br/>
        <input
          type='text'
          id='picture'
          placeholder='URL link to picture'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewSparklingForm;
