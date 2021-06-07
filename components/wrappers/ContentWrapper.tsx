import React from 'react';
import {Layout} from 'antd';

const {Content} = Layout;

export const ContentWrapper: React.FC = ({children}) => (
  <Content className="full-screen">{children}</Content>
);
