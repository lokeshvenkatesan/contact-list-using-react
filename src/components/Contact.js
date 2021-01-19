import React, { Component } from 'react';
// import Header
import PropTypes from 'prop-types';

export class Contact extends Component {
  render() {
   // static propTypes={
      //       {
      //   name: PropTypes.string.isRequired,
      //   Email: PropTypes.string.isRequired,
      //   phone: PropTypes.string.isRequired
      // };
      //     }
    const {name,Email,phone}= this.props;
    return (
      <div>
        <h1> {name}</h1>
        {/* <ul>
          <li>{Email}</li>
          <li>{phone}</li>
        </ul> */}
      </div>
    )
  }
}
Contact.propTypes={
  name: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;