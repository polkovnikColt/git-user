import React from 'react';
import {FormDataInterface} from '../../interfaces/interfaces';
import {FormItem} from './FormItem';
import {CheckboxItem} from './CheckboxItem';
import {IconButton} from '../buttons/IconButton';

type FormProps = {
  buttonText: string;
  formData: FormDataInterface[];
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
  hasCheckbox: boolean;
  handleCheckbox?: () => void;
  checkboxLabel?: string;
};

export const Form: React.FC<FormProps> = ({
  buttonText,
  formData,
  handleChange,
  handleSubmit,
  handleCheckbox,
  hasCheckbox,
  checkboxLabel,
}) => {
  return (
    <div className="form-padding">
      <div className="main-form">
        {formData.map((formItem: FormDataInterface) => (
          <FormItem
            required={formItem.required}
            name={formItem.name}
            label={formItem.label}
            message={formItem.message}
            InputComponent={formItem.inputComponent}
            handleChange={handleChange}
          />
        ))}
        {hasCheckbox && (
          <CheckboxItem
            handleCheckbox={handleCheckbox}
            actionName={checkboxLabel}
          />
        )}
      </div>
      <div className="d-in-block w-100">
        {buttonText && (
          <IconButton className="m-auto" type="update" onClick={handleSubmit}>
            {buttonText}
          </IconButton>
        )}
      </div>
    </div>
  );
};
