import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.css';

//Components
import Routes from './Routes';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <Routes />
      </BrowserRouter>

    );
  }
}

export default App;
