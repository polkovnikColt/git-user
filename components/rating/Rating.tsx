import React, {useState} from 'react';

export const Rating: React.FC = () => {
  const [rating, setRating] = useState(0);

  const rate = e => setRating(+e.target.dataset.index);

  return (
    <div className="rating-row">
      {new Array(5)
        .join('.')
        .split('.')
        .map((_, index) => (
          <img
            key={index}
            data-index={index}
            onClick={rate}
            className="star"
            src={require('../../assets/star.svg')}
            alt="star"
            width={20}
            height={20}
          />
        ))}
    </div>
  );
};
