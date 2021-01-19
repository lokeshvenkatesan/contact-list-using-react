import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>The Simple Component</h1>
      <Contact />
      </div>
    );
  }
}

export default App
