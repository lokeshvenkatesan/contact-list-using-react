import React, { Component } from 'react';
// import Header
export class Contact extends Component {
  render() {
    const {name,Email,phone}= this.props;
    return (
      <div>
        <h4>NAME: {this.props.name}</h4>
        <ul>
          <li>EMAIL: {this.props.Email}</li>
          <li>PHONE: {this.props.phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;
