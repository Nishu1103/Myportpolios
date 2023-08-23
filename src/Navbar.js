// // // import React, { useState } from 'react';
// // import React from 'react';

// // const Navbar = () => {
// //   // const [theme, setTheme] = useState('light');

// //   // const toggleTheme = () => {
// //   //   const newTheme = theme === 'light' ? 'dark' : 'light';
// //   //   setTheme(newTheme);
// //   //   document.documentElement.setAttribute('data-theme', newTheme);
// //   // };

// //   return (
// //     <nav className="navbar">
// //       <div className="container-nav">
// //         <h6> Portpolio </h6>
// //         <ul className="nav-links">
// //           <li><a href="/">Home</a></li>
// //           <li><a href="/about">About</a></li>
// //           <li><a href="/projects">Projects</a></li>
// //           <li><a href="/contact">Contact</a></li>
// //         </ul>
// //         {/* <button className="theme-button" onClick={toggleTheme}>
// //           {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
// //         </button> */}
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import React, { useState } from 'react';
// import './App.css'; // Import your CSS file

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container-nav">
//         <h6> Portfolio </h6>
//         <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/projects">Projects</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <h6 className="logo">Portpolio</h6>

      {/* Links for larger screens */}
        <div className={`links ${showMenu ? "show-menu" : ""}`}>
            <a href="/">Home</a>
            <a href="/create">About</a>
            <a href="/create">Projects</a>
            <a href="/create">Contacts</a>
            {/* <a href="/">Theme</a> */}
        </div>

      {/* Three-dot menu for smaller screens */}
        <button className="dot-menu" onClick={() => setShowMenu(!showMenu)}>&#x22EE;</button>

      {/* Menu items for smaller screens */}
        {showMenu && (
            <div className={"links show-menus"}>
                <a href="/">Home</a>
            <a href="/create">About</a>
            <a href="/create">Projects</a>
            <a href="/create">Contacts</a>
                {/* <a href="/">Theme</a> */}
            </div>
    )}
    </nav>
    );
};

export default Navbar;

