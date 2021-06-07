import React, {Component, ForwardRefExoticComponent} from 'react';
import {Form} from 'antd';

type FormItemProps = {
  name: string;
  label: string;
  message?: string;
  required?: boolean;
  InputComponent: typeof Component | ForwardRefExoticComponent<any>;
  changeHandler: (name: string, value: string) => void;
};

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  message,
  InputComponent,
  changeHandler,
  required,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeHandler(name, e.target.value);
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{required: required, message: message}]}>
      <InputComponent onChange={handleChange} />
    </Form.Item>
  );
};
