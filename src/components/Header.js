import React from 'react';
import PropTypes from 'prop-types';//impt


const Header =(props)=>{
  const {branding} = props;
  return(
    <div>
      <h1>
      {branding}
      </h1>
    </div>
  );
};

Header.defaultProps={
  branding: 'App'
};

Header.propTypes={
  branding: PropTypes.string.isRequired
};
export default Header;

