import React from 'react';

type IconButtonProps = {
  icon?: any;
  type: 'update' | 'add' | 'delete';
  onClick: any;
  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  type,
  children,
  onClick,
  className,
}) => {
  return (
    <button className={`${type} ${className || ''}`} onClick={onClick}>
      {icon && <span className="mx-1">{React.createElement(icon)}</span>}
      <span className="mx-1">{children}</span>
    </button>
  );
};
