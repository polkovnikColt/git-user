import React from 'react';
import Link from 'next/link';
import {Menu} from 'antd';

type MenuItemProps = {
  index: number;
  href: string;
  label: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({label, href, index}) => (
  <Menu.Item key={`${index}`}>
    <Link href={href}>{label}</Link>
  </Menu.Item>
);
