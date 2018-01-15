import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import Forecasts from './components/Forecasts';
import Details from './components/Details';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Weather} />
            <Route path='/forecasts' component={Forecasts} />
            <Route path='/details' component={Details} />
            <Route component={() => {
              return <p> Nothing to see here </p>
            }} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
