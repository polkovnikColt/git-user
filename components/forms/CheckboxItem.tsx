import React from 'react';
import {Checkbox, Space} from 'antd';

type CheckboxProps = {
  handleCheckbox: () => void;
  actionName: string;
};

export const CheckboxItem: React.FC<CheckboxProps> = ({
  handleCheckbox,
  actionName,
}) => {
  return (
    <Space>
      <Checkbox onClick={handleCheckbox} />
      {actionName}
    </Space>
  );
};
