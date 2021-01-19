import React from 'react';
import PropTypes from 'prop-types';//impt


const Header = props =>{
  const {branding} = props;
  return(
   < nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
     <div className="container">
       <a href="/" className="navbar-brand">{branding}
       </a>
       <div>
         <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <a href="/" className="nav-link">Post</a>
           </li>
         </ul>
         <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <a href="/" className="nav-link">Authors</a>
           </li>
         </ul>
       </div>
     </div>
     </ nav>
  );
};

Header.defaultProps={
  branding: 'App'
}; 

 Header.propTypes={
  branding: PropTypes.string.isRequired
}; 
const headingStyle ={
  color:'purple',
  fontSize:'150px'
}
export default Header;

