import React from 'react';
import Sparkling from './Sparkling';
import './SparklingList.css';
import PropTypes from 'prop-types';


//I don't know where to put this!!!!
var masterSparklingList = [
  {
    price: '2.75',
    brand: 'Cascadia',
    flavor: 'Hood Air',
    description: 'The hills are alive with the taste of this amerrzing sparkling water!',
    imageUrl: <img src={require('../assets/mthood.jpg')} alt="" />
  },
  {
    price: '3.00',
    brand: 'Oregonia',
    flavor: 'Portlandus',
    description: 'Reminiscent of air pollution, alleys, and parallel parking.',
    imageUrl: <img src={require('../assets/portland.jpg')} alt="" />
  },
  {
    price: '2.50',
    brand: 'Farmers R Us',
    flavor: 'Kale',
    description: 'An Oregon favorite, the flavor of this delectable water is 99% kale, 1% Mt. Hood Strawberries!',
    imageUrl: <img src={require('../assets/kale.jpg')} alt="" />
  }
];

export default class SparklingList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      sparklingList: masterSparklingList,
      formVisibleOnPage: false
    }
    
    return (
      <div>
        <hr/>
        {Object.keys(props.masterSparklingList).map(function(sparklingId) {
          let sparkling = props.masterSparklingList[sparklingId];
          return <Sparkling 
            price={sparkling.price}
            brand={sparkling.brand}
            flavor={sparkling.flavor}
            description={sparkling.description}
            imageUrl={sparkling.imageUrl}
            currentRouterPath={props.currentRouterPath}
            key={sparklingId}
            sparklingId={sparklingId}
            onSparklingSelection={props.onSparklingSelection}
            />
        })}
      </div>
    );
  }
}

SparklingList.propTypes = {
  sparklingList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onSparklingSelection: PropTypes.func
};
