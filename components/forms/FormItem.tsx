import React, {Component, ForwardRefExoticComponent} from 'react';
import {Form} from 'antd';

type FormItemProps = {
  name: string;
  label: string;
  message?: string;
  required?: boolean;
  InputComponent: typeof Component | ForwardRefExoticComponent<any>;
  handleChange: (name: string, value: string) => void;
};

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  message,
  InputComponent,
  handleChange,
  required,
}) => {
  const handleChangeFunc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleChange(name, e.target.value);
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{required: required, message: message}]}>
      <InputComponent onChange={handleChangeFunc} />
    </Form.Item>
  );
};
