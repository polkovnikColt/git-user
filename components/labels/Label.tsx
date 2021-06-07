import React from 'react';
import Link from 'next/link';

type LabelProps = {
  href?: string;
  text: string;
  isLink: boolean;
};

export const Label: React.FC<LabelProps> = ({href, isLink, text}) => (
  <span className={isLink ? 'linked-label' : 'label'}>
    {isLink ? <Link href={href}>{text}</Link> : {text}}
  </span>
);
