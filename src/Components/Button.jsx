// import React from 'react';



// const Button = () => {
//   return (
//     <div className='div1'>
//       <button className="trynow">TryNow</button>
//     </div>
//   );
// }

// export default Button;


// Button.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router

const Button = () => {
  return (
    
    <Link to="/image-enhancer"> {/* Use Link component to navigate to ImageEnhancer component */}
      <button className='trynow'>Try Now</button>
    </Link>
  );
}

export default Button;
