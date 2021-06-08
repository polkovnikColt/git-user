import React from 'react';
import {Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons/lib';

type DropdownOverlayProps = {
  menu: any;
};

export const DropdownOverlay: React.FC<DropdownOverlayProps> = ({menu}) => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="ant-dropdown-link">
        Click me <DownOutlined />
      </div>
    </Dropdown>
  );
};
