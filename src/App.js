import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
       
        <Header branding= "" />
        {/* <Contact name= "Mohan"
          Email= "mohan@gmail.com"
          phone="9093939922" /> */}
        <Contact name= "Hello from Home"/>
      
          {/* Email= "lokesh@gmail.com"
          phone="903232898"  */}
      
      {/* <Contact /> */}
      </div>
    );
  }
}

export default App
