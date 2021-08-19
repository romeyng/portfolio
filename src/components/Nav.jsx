import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return ( 

        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <Link className="navbar-item" to= "/"> MATHEMAGIC</Link>

    
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <Link className="navbar-item" to= "/"> Home</Link>
      
                

      <Link className="navbar-item" to= "/Magic"> Tricks</Link>
      <Link className="navbar-item" to= "/Magic"> About</Link>
  

     
      </div>
    </div>

   
</nav>
    
     
      
     );
}
 
export default Nav;