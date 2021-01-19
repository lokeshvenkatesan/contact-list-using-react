import React, { Component } from 'react';
// import Header
export class Contact extends Component {
  render() {
    const {name,Email,phone}= this.props;
    return (
      <div>
        <h4>NAME: {name}</h4>
        <ul>
          <li>EMAIL: {Email}</li>
          <li>PHONE: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;