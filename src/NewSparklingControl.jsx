import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewSparklingForm from './NewSparklingForm';
import PropTypes from 'prop-types';

class NewSparklingControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewSparklingForm onNewSparklingCreation={this.props.onNewSparklingCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
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
