import React from 'react';

type PaddingWrapperProps = {
  className?: string;
};

export const PaddingWrapper: React.FC<PaddingWrapperProps> = ({
  className = '',
  children,
}) => <div className={`padding-wrapper ${className}`}>{children}</div>;
