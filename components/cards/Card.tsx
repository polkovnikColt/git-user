import React from 'react';
import {Card as AntCard} from 'antd';

type CardItemProps = {
  cardTitle: string;
  cardExtra?: React.ReactNode;
};

export const Card: React.FC<CardItemProps> = ({
  cardTitle,
  cardExtra,
  children,
}) => {
  return (
    <AntCard title={cardTitle} extra={cardExtra} bordered className="card">
      {children}
    </AntCard>
  );
};
