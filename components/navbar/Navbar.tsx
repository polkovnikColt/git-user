import React from 'react';
import {Avatar, Col, Layout, Menu, Row} from 'antd';
import {links} from './additional/service';
import {MenuItem} from '../menu/MenuItem';
import {MenuDropdown} from '../menu/MenuDropdown';
import {DropdownOverlay} from '../menu/DropdownOverlay';

const {Header} = Layout;

export const Navbar: React.FC = () => {
  return (
    <Header className="navbar">
      <Row>
        <Col span={17}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {links.map((link, index) => (
              <MenuItem
                index={index}
                href={link.href}
                label={link.label}
                isLink
              />
            ))}
          </Menu>
        </Col>
        <Col span={6}>
          <Row>
            <Avatar src={''} className="avatar" />
            <DropdownOverlay menu={<MenuDropdown menuItems={[]} />} />
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
