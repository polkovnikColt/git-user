import React from 'react';
import {Card} from 'antd';
import {Label} from '../labels/Label';

type CardItemProps = {
  cardTitle: string;
};

export const CardItem: React.FC = () => {
  return (
    <Card
      title="Card title"
      extra={
        <Label
          className="p-1"
          size="small"
          text="<- go back"
          href="/repositories"
          isLink
        />
      }
      bordered={true}
      style={{width: 300}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};
