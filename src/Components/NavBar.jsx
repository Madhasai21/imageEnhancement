// import React from 'react';
// import './Home.css'; // Import CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1>Underwater Image Enhancement</h1>
//       </div>
//       <div className="navbar-center">
//         <input type="file" accept="image/*" className="upload-input" />
//         <button className="upload-button">Upload</button>
//         <button className="upload-image-button">Upload Image</button>
//       </div>
//       <div className="navbar-right">
//         <p>Hi, welcome..!</p>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import './NavBar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Underwater Image Enhancement</h1>
      </div>
      <div className="navbar-center">
        <button className="upload-button" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Upload</button>
        <button className="upload-image-button" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Upload Image</button>
      </div>
      
      <div className="navbar-right">
        <p>Hi, welcome..!</p>
      </div>
    </nav>
  );
}

export default Navbar;
