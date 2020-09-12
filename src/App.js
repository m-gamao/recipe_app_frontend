import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Components/Form';
// import './css/customStyles.css'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/recipes" render={props => <Form {...props}/>} />
    </Switch>
  );
};



export default App;
    
