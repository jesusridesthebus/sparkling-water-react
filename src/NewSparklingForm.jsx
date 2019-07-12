import React from 'react';

function NewSparklingForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='flavor'
          placeholder='Flavor'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <textarea
          id='description'
          placeholder='Description'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewSparklingForm;
