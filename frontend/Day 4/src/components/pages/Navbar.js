// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/register">Register</Link></li>
//                 {/* Add more navigation links as needed */}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Define an array of paths where the Navbar should be rendered
    const navbarPaths = ['/', '/login', '/register'];

    // Check if the current location pathname is included in the navbarPaths array
    const shouldRenderNavbar = navbarPaths.includes(location.pathname);

    // Render the Navbar only if the current location is in navbarPaths
    return shouldRenderNavbar ? (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    ) : null;
};

export default Navbar;
