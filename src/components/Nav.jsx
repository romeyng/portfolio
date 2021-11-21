import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return ( 
      <div className="nav-container">
        <header>
      <Link className="logo" to= "/"> NoobMyster</Link>
      
          <nav className="navbar is-dark" role="navigation" aria-label="main navigation">


          <ul id="navbarBasicExample" className="navbar-menu">
            <li><Link className="navbar-item" to= "/"> Home</Link></li>
            <li><Link className="navbar-item" to= "/Magic"> Projects</Link></li>
            <li><Link className="navbar-item" to= "/Magic"> Blog</Link></li>
            <li><Link className="navbar-item" to= "/Magic"> About</Link></li>
          </ul>

   
</nav>
</header>
</div>
    
     
      
     );
}
 
export default Nav;