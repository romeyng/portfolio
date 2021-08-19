import React from 'react';
import '../node_modules/deck-of-cards/example/example.css'
import './App.css';
import Home from './components/Home'
import Magic1 from './components/Magic1'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';


function App() {
  return(
    <Router>
    <div className="App">
    <Nav/>
      <Switch>
    
    <Route path= "/" exact component={Home}/>
    <Route path="/magic" component={Magic1} />
    </Switch>
    
    </div>
    
    </Router>
  )
}

export default App;




