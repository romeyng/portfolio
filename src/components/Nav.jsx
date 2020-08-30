import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return ( 
        <nav>
            <h3>Logo</h3>
            <ul>
               <Link to= "/"> <li>Home</li></Link>
                <Link to="/magic"><li>Magic</li></Link>
            </ul>
        </nav>
     );
}
 
export default Nav;