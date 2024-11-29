import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
// Ensure you have react-bootstrap installed

import Slideimg1 from './images/slide1.png';
import Slideimg2 from './images/slide2.png';
import Slideimg3 from './images/slide3.png';
import Slideimg5 from './images/slide5.png';
import Slideimg6 from './images/slide6.png';
import Slideimg7 from './images/slide7.png';

const CarouselComponent = () => {
  // Fixing the issue with how the images are imported
  const slides1 = [
    { src: Slideimg1, alt: 'Slide 1' },  // Corrected here: Removed curly braces around the image import
    { src: Slideimg2, alt: 'Slide 2' },
    { src: Slideimg3, alt: 'Slide 3' },
  ];

  const slides2 = [
    { src: Slideimg5, alt: 'Slide 5' },
    { src: Slideimg6, alt: 'Slide 6' },
    { src: Slideimg7, alt: 'Slide 7' },
  ];

  const renderSlide = (slides) => (
    <div className="flex justify-between">
      {slides.map((slide, index) => (
        <div key={index} className="w-1/4 px-2">
          <img
            src={slide.src}  // Correct usage of the imported images
            alt={slide.alt}
            className="rounded-lg object-cover w-full"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div id="slider" className="mt-20 container mx-auto">
      <Carousel interval={3000} controls indicators>
        <Carousel.Item>
          <div className="flex justify-between">
            {renderSlide(slides1)}  {/* Renders the first set of images */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-between">
            {renderSlide(slides2)}  {/* Renders the second set of images */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
