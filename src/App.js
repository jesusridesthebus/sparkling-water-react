import React from 'react';
import './App.css';
import Header from './Components/Header';
import SparklingList from './Components/SparklingList';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NewSparklingForm from './Components/NewSparklingForm';
import NewSparklingControl from './Components/NewSparklingControl';
import { v4 } from 'uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterSparklingList: {},
      selectedSparkling: null
    };
    this.handleAddingNewSparklingToList = this.handleAddingNewSparklingToList.bind(this);
    this.handleChangingSelectedSparkling = this.handleChangingSelectedSparkling.bind(this);
  }

  handleAddingNewSparklingToList(newSparkling){
    var newSparklingId = v4();
    var newMasterSparklingList = Object.assign({}, this.state.masterSparklingList, {
      [newSparklingId]: newSparkling
    });
    newMasterSparklingList[newSparklingId].formattedWaitTime = newMasterSparklingList[newSparklingId].timeOpen.fromNow(true);
    this.setState({masterSparklingList: newMasterSparklingList});
  }

  handleChangingSelectedSparkling(sparklingId){
    this.setState({selectedSparkling: sparklingId});
  }

  render(){
    return (
      <div className="App">
        <HashRouter>
          <Header/>
          <Switch>
            {/* <Route path='/sparklinglist' component={SparklingList} /> */}
            <Route exact path='/sparklinglist' render={()=><SparklingList sparklingList={this.state.masterSparklingList} />} />
            {/* <Route path='/newsparkling' component={NewSparklingForm} /> */}
            <Route path='/newsparkling' render={()=><NewSparklingForm onNewSparklingCreation={this.handleAddingNewSparklingToList} />} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}