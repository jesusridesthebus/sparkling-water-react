import React from 'react';
import './App.css';
import Header from './Header';
import SparklingList from './SparklingList';
import { Switch, Route } from 'react-router-dom';
// import NewSparklingForm from './NewSparklingForm';
import NewSparklingControl from './NewSparklingControl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSparklingList: {},
      selectedSparkling: null
    };
    this.handleAddingNewSparklingToList = this.handleAddingNewSparklingToList.bind(this);
    this.handleChangingSelectedSparkling = this.handleChangingSelectedSparkling.bind(this);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={SparklingList} /> */}
          <Route exact path='/' render={()=><SparklingList sparklingList={this.state.masterSparklingList} />} />
          {/* <Route path='/newsparkling' component={NewSparklingForm} /> */}
          <Route path='/newsparkling' render={()=><NewSparklingControl onNewSparklingCreation={this.handleAddingNewSparklingToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
