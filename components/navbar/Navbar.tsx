import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import {links} from '../../utils/navbar/navbarService';
import {MenuItem} from '../menu/MenuItem';
import {IconButton} from '../buttons/IconButton';
import {PoweroffOutlined} from '@ant-design/icons/lib';
import {UserProfile} from '../user/UserProfile';

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
        <Col span={7}>
          <Row align="middle" className="h-100">
            <UserProfile
              avatar=""
              tooltipData="User credentials"
              link=""
              profileName="User"
            />
            <IconButton
              type="delete"
              onClick={() => {}}
              icon={PoweroffOutlined}
              className="m-auto">
              Logout
            </IconButton>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
