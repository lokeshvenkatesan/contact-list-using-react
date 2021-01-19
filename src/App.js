import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

export class App extends Component {
  render() {
    return (
      <div>
       
        <Header branding= "Doctor's Contact Manager" />
        <Contact name= "Mohan"
          Email= "mohan@gmail.com"
          phone="9093939922" />
        <Contact name= "Lokesh"
          Email= "lokesh@gmail.com"
          phone="903232898" />
      
      <Contact />
      </div>
    );
  }
}

export default App
