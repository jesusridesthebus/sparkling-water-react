import React from 'react';
import Sparkling from './Sparkling';

var masterSparklingList = [
  {
    price: '$2.75',
    brand: 'Cascadia',
    flavor: 'Mountain air',
    description: 'description',
    imageUrl: ''
  },
  {
    price: '$3.00',
    brand: 'Brand',
    flavor: 'flavor',
    description: 'description',
    imageUrl: ''
  },
  {
    price: '$2.50',
    brand: 'Brand',
    flavor: 'flavor',
    description: 'description',
    imageUrl: ''
  }
];

function SparklingList(){

  return (
    <div>
      <hr/>
      {masterSparklingList.map((sparkling, index) =>
          <Sparkling 
          price={sparkling.price}
          brand={sparkling.brand}
          flavor={sparkling.flavor}
          description={sparkling.description}
          key={index}/>
      )}
    </div>
  );
}

export default SparklingList;
