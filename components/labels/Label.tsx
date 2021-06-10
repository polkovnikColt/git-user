import React from 'react';
import Link from 'next/link';

type LabelProps = {
  href?: string;
  size: 'small' | 'medium' | 'big';
  text: string;
  className?: string;
  isLink?: boolean;
};

export const Label: React.FC<LabelProps> = ({
  href,
  isLink,
  className,
  text,
  size,
  ...props
}) => (
  <div
    {...props}
    className={`${size} ${isLink ? 'linked-label' : 'label'} ${
      className || ''
    }`}>
    {isLink ? <Link href={href}>{text}</Link> : text}
  </div>
);
