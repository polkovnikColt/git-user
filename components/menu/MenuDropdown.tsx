import React from 'react';
import {Menu} from 'antd';
import {MenuItem} from './MenuItem';

type MenuDropdownProps = {
  menuItems: any;
};

export const MenuDropdown: React.FC<MenuDropdownProps> = ({menuItems}) => {
  return (
    <Menu>
      {menuItems.map((item, index) => (
        <MenuItem index={index} label={item.label} isLink={item.isLink} />
      ))}
    </Menu>
  );
};
