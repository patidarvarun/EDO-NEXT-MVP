import { useState } from 'react';

interface RatingProps {
  totalStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <svg
            key={index}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            className={`w-5 h-5 cursor-pointer ${
              (hoverRating || rating) >= starIndex ? 'text-yellow-500' : 'text-[#DD999A]'
            }`}
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
