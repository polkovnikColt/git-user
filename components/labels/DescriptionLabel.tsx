import React from 'react';

type DescriptionLabelProps = {
  description: string;
  text: string;
  className?: string;
};

export const DescriptionLabel: React.FC<DescriptionLabelProps> = ({
  text,
  description,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <span className="description">{description}</span>
      <span> : </span>
      <span className="text">{text}</span>
    </div>
  );
};
