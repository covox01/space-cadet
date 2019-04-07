import React, { Component } from 'react';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module5 from './components/Module5';
import './App.css';
import './styles/styles.scss'

class App extends Component {
  render() {
    return (
      <div className="super-container">
        <div className="app-container">
          <Module1/>
          <Module2/>
          <Module3/>
          <Module4/>
          <Module5/>
        </div>
      </div>
    );
  }
}

export default App;
