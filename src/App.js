// import logo from './logo.svg';
// import './App.css';
// import Home  from './Components/Home';


// function App() {
//   return (
//     <>
//     <Home></Home>
  
//     </>
//   );
// }

// export default App;
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './Components/Home';
import ImageEnhancer from './Components/ImageEnhancer'; // Import ImageEnhancer component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home component */}
        <Route path="/image-enhancer" element={<ImageEnhancer />} /> {/* Route for ImageEnhancer component */}
      </Routes>
    </Router>
  );
}

export default App;
