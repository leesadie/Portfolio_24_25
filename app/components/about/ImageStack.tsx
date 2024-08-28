'use client';

import { useState } from "react";

const ImageStack = () => {
    const [images, setImages] = useState<string[]>([
      '/images/about3.svg',
      '/images/about2.svg',
      '/images/about1.svg',
    ]);
  
    const moveToBack = (index: number) => {
      if (index === images.length - 1) { // Only move the top image
        const newImages = [...images];
        const [selectedImage] = newImages.splice(index, 1);
        newImages.unshift(selectedImage);
        setImages(newImages);
      }
    };
  
    return (
      <div className="relative lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]">
        {images.map((image, index) => {
          const isTopImage = index === images.length - 1;
          return (
            <img
              key={index}
              src={image}
              onClick={() => moveToBack(index)}
              className={`absolute w-full h-full object-cover rounded-lg cursor-pointer shadow-lg transition-transform duration-500 ease-in-out ${isTopImage ? 'z-20' : 'z-10'}`}
              style={{ 
                transform: `translateY(-${index * 10}px) ${isTopImage ? '' : `rotate(${index * 5}deg)`}`, 
                transition: 'transform 0.5s ease' 
              }}
            />
          );
        })}
      </div>
    );
  };
  
  export default ImageStack;