import React from 'react';
import './App.css';
import Header from './Header';
import SparklingList from './SparklingList';
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Switch>
        <Route exact path='/' component={SparklingList} />
        <SparklingList/> */}
      {/* </Switch> */}
      <SparklingList/>   {/* take out later */}
    </div>
  );
}

export default App;
