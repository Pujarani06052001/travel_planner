// // components/Navbar.js
// import React from 'react';

// const Navbar = () => {
//   return (
//     <>
//       <div className="navbar">
//         {/* <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoM2I3Q6Zb_okRag_dFWFhNnRtwDoBxKX2A&s" /> */}
//         <a href="https://www.recipetineats.com/" className="active">Home</a>
//         <a href="/destination.js">Destination</a>
//         <a href="Recipes">Hotel </a>
//         <input className="input" type="text" placeholder="Enter a country" />
//         {/* <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlJNDOU-G_CL6NQv_fDCgps3Mqq1QFXPRK0rXyRAXf2_u_hyZ6UPb45zGvGt1BbT1fic&usqp=CAU"/> */}
//         <a className="login" href="#login">Login</a>
//         <a className="signup" href="#Signup">Sign-up</a>
//         <a className="sign" href="#Sign up">Book Now</a>

//       </div>

//     </>
//   );
// };

// export default Navbar;





// components/Navbar.js
// components/Navbar.js
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="navbar">
            {/* Uncomment and use the image as needed */}
            {/* <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoM2I3Q6Zb_okRag_dFWFhNnRtwDoBxKX2A&s" /> */}
            <Link href="/">
                <span className="active">Home</span>
            </Link>
            <Link href="/destination">
                <span>Destination</span>
            </Link>
            <Link href="/hotel">
                <span>Hotel</span>
            </Link>
            <input className="input" type="text" placeholder="Enter a country" />
            {/* Uncomment and use the image as needed */}
            {/* <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlJNDOU-G_CL6NQv_fDCgps3Mqq1QFXPRK0rXyRAXf2_u_hyZ6UPb45zGvGt1BbT1fic&usqp=CAU"/> */}
            <Link href="/login">
                <span className="login">Login</span>
            </Link>
            <Link href="/signup">
                <span className="signup">Sign-up</span>
            </Link>
            <Link href="/book">
                <span className="sign">Book Now</span>
            </Link>
        </div>
    );
};

export default Navbar;
