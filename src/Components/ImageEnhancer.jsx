// import React, { useState } from 'react';
// import './ImageEnhancer.css'; 
 
// const ImageEnhancer = () => {
//     const [originalImage, setOriginalImage] = useState(null);
//     const [enhancedImages, setEnhancedImages] = useState([]);
 
//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
 
//         reader.onload = (e) => {
//             setOriginalImage(e.target.result);
//         };
//         reader.readAsDataURL(file);
//     };
 
//     const enhanceImage = () => {
//         if (!originalImage) return;
 
//         // Apply HSV transformation
//         const img = new Image();
//         img.onload = () => {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img, 0, 0);
//             const imageData = ctx.getImageData(0, 0, img.width, img.height);
 
//             // Apply custom filter (HSV transformation)
//             const hsvTransformedData = applyHsvTransformation(imageData);
//             const hsvEnhancedImage = imageDataToDataURL(hsvTransformedData);
//             setEnhancedImages(prevImages => [...prevImages, { type: 'HSV', data: hsvEnhancedImage }]);
 
//             // Apply HIST transformation
//             const histTransformedData = applyHistTransformation(imageData);
//             const histEnhancedImage = imageDataToDataURL(histTransformedData);
//             setEnhancedImages(prevImages => [...prevImages, { type: 'HIST', data: histEnhancedImage }]);
 
//             // Apply CAIP transformation
//             const caipTransformedData = applyCaipTransformation(imageData);
//             const caipEnhancedImage = imageDataToDataURL(caipTransformedData);
//             setEnhancedImages(prevImages => [...prevImages, { type: 'CAIP', data: caipEnhancedImage }]);
//         };
//         img.src = originalImage;
//     };
 
//     return (
// <div className="container">
// <h2>Image Enhancer</h2>
// <input type="file" accept="image/*" onChange={handleImageUpload} />
//             {originalImage && (
// <div className="images">
// <div className="image-container">
// <img className="original-image" src={originalImage} alt="Original" />
// <p>Original Image</p>
// </div>
//                     {enhancedImages.map((image, index) => (
// <div className="image-container" key={index}>
// <img className="enhanced-image" src={image.data} alt={`${image.type} Enhanced`} />
// <p>{image.type} Enhanced Image</p>
// </div>
//                     ))}
// </div>
//             )}
// <button onClick={enhanceImage}>Enhance (HSV, HIST, CAIP)</button>
// </div>
//     );
// };
 
// export default ImageEnhancer;
 
// const rgbToHsv = (r, g, b) => {
//     r /= 255;
//     g /= 255;
//     b /= 255;
 
//     const max = Math.max(r, g, b);
//     const min = Math.min(r, g, b);
//     let h, s, v = max;
 
//     const d = max - min;
//     s = max === 0 ? 0 : d / max;
 
//     if (max === min) {
//         h = 0; // achromatic
//     } else {
//         switch (max) {
//             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//             case g: h = (b - r) / d + 2; break;
//             case b: h = (r - g) / d + 4; break;
//             default: break; // Handle unexpected cases
//         }
//         h /= 6;
//     }
//     return [h * 360, s * 100, v * 100];
// };
 
// const hsvToRgb = (h, s, v) => {
//     // Implementation of HSV to RGB conversion
//     const c = v * s;
//     const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
//     const m = v - c;
//     let r, g, b;
//     if (0 <= h && h < 60) {
//         [r, g, b] = [c, x, 0];
//     } else if (60 <= h && h < 120) {
//         [r, g, b] = [x, c, 0];
//     } else if (120 <= h && h < 180) {
//         [r, g, b] = [0, c, x];
//     } else if (180 <= h && h < 240) {
//         [r, g, b] = [0, x, c];
//     } else if (240 <= h && h < 300) {
//         [r, g, b] = [x, 0, c];
//     } else if (300 <= h && h < 360) {
//         [r, g, b] = [c, 0, x];
//     }
//     return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
// };
 
// function applyHsvTransformation(imageData) {
//     const data = imageData.data;
//     for (let i = 0; i < data.length; i += 4) {
//         const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
//         const [h, s, v] = rgbToHsv(r, g, b);
 
//         // Adjust hue (for example, add 180 degrees)
//         const newHue = (h + 180) % 360;
 
//         // Convert back to RGB
//         const [newR, newG, newB] = hsvToRgb(newHue, s, v);
 
//         // Update pixel values
//         data[i] = newR;
//         data[i + 1] = newG;
//         data[i + 2] = newB;
//     }
//     return imageData;
// }
 
// function applyHistTransformation(imageData) {
//     // Placeholder for HIST transformation
//     // Implementation to be added
//     return imageData; // Placeholder return
// }
 
// function applyCaipTransformation(imageData) {
//     // Placeholder for CAIP transformation
//     // Implementation to be added
//     return imageData; // Placeholder return
// }
 
// function imageDataToDataURL(imageData) {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = imageData.width;
//     canvas.height = imageData.height;
//     ctx.putImageData(imageData, 0, 0);
//     return canvas.toDataURL();
// }
//------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageEnhancer = () => {
//     const [originalImage, setOriginalImage] = useState(null);
//     const [enhancedImage, setEnhancedImage] = useState(null);

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         setOriginalImage(file); // Store the original image file
//     };

//     const enhanceImage = async () => {
//         if (!originalImage) return;

//         const formData = new FormData();
//         formData.append('media', originalImage);
//         formData.append('models', 'properties'); // Using the 'properties' model for demonstration
//         formData.append('api_user', '208334238'); // Replace with your Sightengine user
//         formData.append('api_secret', 'qKPNHsrSZPywqgxD5WiwJGWFozKHxJKh'); // Replace with your Sightengine key

//         try {
//             const response = await axios.post('https://api.sightengine.com/1.0/check.json', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data);
//             // Assuming the response contains the enhanced image URL
//             setEnhancedImage(response.data.url);
//         } catch (error) {
//             console.error('Error processing image:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Image Enhancer</h2>
//             <input type="file" accept="image/*" onChange={handleImageUpload} />
//             {originalImage && <img src={URL.createObjectURL(originalImage)} alt="Original" style={{ maxWidth: '100%' }} />}
//             {enhancedImage && <img src={enhancedImage} alt="Enhanced" style={{ maxWidth: '100%' }} />}
//             {originalImage && !enhancedImage && <button onClick={enhanceImage}>Enhance</button>}
//         </div>
//     );
// };

// export default ImageEnhancer;
//-------------------------------------------------------------------------
import React, { useState } from 'react';
import axios from 'axios';
const ImageEnhancer = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [enhancedImages, setEnhancedImages] = useState({
        brightness: [],
        colors: [],
        contrast: []
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setOriginalImage(file); // Store the original image file
        setEnhancedImages({
            brightness: [],
            colors: [],
            contrast: []
        }); // Reset enhanced images when uploading a new image
    };

    const enhanceImage = async () => {
        if (!originalImage) return;

        const formData = new FormData();
        formData.append('media', originalImage);
        formData.append('models', 'properties'); // Using the 'properties' model for demonstration
        formData.append('api_user', '208334238'); // Replace with your Sightengine user
        formData.append('api_secret', 'qKPNHsrSZPywqgxD5WiwJGWFozKHxJKh'); // Replace with your Sightengine key

        try {
            const response = await axios.post('https://api.sightengine.com/1.0/check.json', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);

            // Check if the response data contains brightness, colors, and contrast objects
            if (response.data.hasOwnProperty('brightness') && response.data.hasOwnProperty('colors') && response.data.hasOwnProperty('contrast')) {
                // Update the state to include the enhanced images
                setEnhancedImages({
                    brightness: [response.data.brightness.url],
                    colors: [response.data.colors.url],
                    contrast: [response.data.contrast.url]
                });
            } else {
                console.error('Error processing image: Unexpected response structure');
            }
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };

    return (
        <div>
            <h2 className='ha'>Image Enhancer</h2>
            <div>
                <h3 className='ha'>Original Image</h3>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {originalImage && <img src={URL.createObjectURL(originalImage)} alt="Original" style={{ maxWidth: '100%' }} />}
            </div>
            <div>
                <h3 className='ha'>Enhanced Images</h3>
                {Object.entries(enhancedImages).map(([type, images]) => (
                    <div key={type}>
                        <h4>{type} Enhanced</h4>
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`${type} Enhanced ${index}`} style={{ maxWidth: '100%' }} />
                        ))}
                    </div>
                ))}
                {originalImage && !enhancedImages.length && <button onClick={enhanceImage}>Enhance</button>}
            </div>
        </div>
    );
};

export default ImageEnhancer;