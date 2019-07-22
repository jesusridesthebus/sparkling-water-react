import React from 'react';
import NewSparklingForm from './NewSparklingForm';
import PropTypes from 'prop-types';

class NewSparklingControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
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

export default NewSparklingControl;
