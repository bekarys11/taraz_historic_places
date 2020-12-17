import React from 'react';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Place from './components/Place.js';

import { ListOfPlaces } from './components/Place.js';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" />
      </Switch>
      <h1>Места и памятники</h1>
      <div className="places">
        {ListOfPlaces.slice(1, 4).map((place) => (
          <Place key={place.id} srcOfImg={place.src} name={place.name} />
        ))}
      </div>
    </Router>
  );
}

export default App;
