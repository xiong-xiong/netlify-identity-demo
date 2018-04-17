import React from 'react';


const Nav = (props) => (
    <nav className="navigation">
        <div className="container">
            <span className="logo">
                NETLIFY IDENTITY DEMO
            </span>
            <span>
            <a href="#" onClick={props.handleIdentity}>{props.userName ?  props.userName : "Login"}</a>
            </span>
        </div>
    </nav>
  );
  
  export default Nav;