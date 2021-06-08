import React from 'react';
import Link from 'next/link';
import {Menu} from 'antd';

type MenuItemProps = {
  index: number;
  href?: string;
  label: string;
  isLink?: boolean;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  index,
  isLink,
}) => {
  return (
    <Menu.Item key={`${index}`}>
      {isLink ? <Link href={href}>{label}</Link> : label}
    </Menu.Item>
  );
};
