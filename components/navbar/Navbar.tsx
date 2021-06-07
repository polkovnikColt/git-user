import React from 'react';
import {Layout, Menu} from 'antd';
import {links} from './additional/service';
import {MenuItem} from '../menu/MenuItem';

const {Header} = Layout;

export const Navbar: React.FC = () => {
  return (
    <Header style={{position: 'sticky', zIndex: 1, width: '100%'}}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {links.map((link, index) => (
          <MenuItem index={index} href={link.href} label={link.label} />
        ))}
      </Menu>
    </Header>
  );
};
