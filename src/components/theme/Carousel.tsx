import { useState } from 'react';
import styles from "../../styles/dashboard.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Selected Image Card */}
      <div className="flex items-center justify-center p-4 ">
        <div className="border border-gray-300 shadow-lg overflow-hidden">
          <img src={images[currentIndex]} alt={`Selected Slide ${currentIndex}`} className="justify-center w-72 "/>
        </div>
      </div>
      {/* Carousel Controls */}
      <div className="flex justify-between items-center py-1 px-2 mb-4 border">
        <h2 className="text-sm font-bold uppercase">Preview how this template has been used</h2>
        <div>
        <button
            onClick={prevSlide}
            className={`p-2 mr-2`}
            disabled={currentIndex === 0}
          >
            {currentIndex === 0 ?
        <img src="/assets/images/arrow-left-white.svg" alt="right arrow" />:
          <img src="/assets/images/arrow-right.svg" alt="right arrow" />}
        </button>
        <button
          onClick={nextSlide}
          className="p-2 "
          disabled={currentIndex === images.length - 1}
        >
        <img src="/assets/images/arrow-left.svg" alt="left arrow" />

        </button>
        </div>
      </div>
      {/* Carousel Thumbnails */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-300 p-2"
          style={{ transform: `translateX(-${(currentIndex - 3) * (100 / 6.5)}%)` }}
        >
          {images.map((image, index) => (
            <div
            key={index}
            className={`${styles.carousel_thumbnail} flex-shrink-0 cursor-pointer px-1 py-1 mx-1 ${index === currentIndex ? 'border-4 border-red-500 rounded' : 'hover:border-4 hover:border-gray-400 rounded'}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
