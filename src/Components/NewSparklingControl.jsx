import React from 'react';
import NewSparklingForm from './NewSparklingForm';
import PropTypes from 'prop-types';
import SparklingList from './SparklingList';

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

export default class NewSparklingControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sparklingList: masterSparklingList,
      formVisibleOnPage: false
    }
    this.handleNewSparkling = this.handleNewSparkling.bind(this)
  }

  handleNewSparkling(sparkling) {
    let newSparklingList = this.state.sparklingList;
    newSparklingList.push(sparkling);
    this.setState({
      sparklingList: masterSparklingList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewSparklingForm onNewSparklingCreation={this.props.onNewSparklingCreation}/>;
    } 
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewSparklingControl.propTypes = {
  onNewSparklingCreation: PropTypes.func
};