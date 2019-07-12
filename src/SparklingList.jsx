import React from 'react';
import Sparkling from './Sparkling';
import './SparklingList.css';

var masterSparklingList = [
  {
    price: '$2.75',
    brand: 'Cascadia',
    flavor: 'Hood Air',
    description: 'The hills are alive with the taste of this amerrzing sparkling water!',
    imageUrl: <img src={require('./assets/mthood.jpg')} alt="" />
  },
  {
    price: '$3.00',
    brand: 'Oregonia',
    flavor: 'Portlandus',
    description: 'Reminiscent of air pollution, alleys, and parallel parking.',
    imageUrl: <img src={require('./assets/portland.jpg')} alt="" />
  },
  {
    price: '$2.50',
    brand: 'Farmers R Us',
    flavor: 'Kale',
    description: 'An Oregon favorite, the flavor of this delectable water is 99% kale, 1% Mt. Hood Strawberries!',
    imageUrl: <img src={require('./assets/kale.jpg')} alt="" />
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
          imageUrl={sparkling.imageUrl}
          key={index}/>
      )}
    </div>
  );
}

export default SparklingList;
