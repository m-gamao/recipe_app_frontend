import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserInput from './components/UserInput';
// import './css/customStyles.css'
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Home />
      <Route exact path="/SearchResults" render={props => <UserInput {...props}/>} />
    </Switch>
  );
};



export default App;
    
