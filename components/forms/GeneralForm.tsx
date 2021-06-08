import React from 'react';
import {FormDataInterface} from '../../interfaces/interfaces';
import {FormItem} from './FormItem';
import {CheckboxItem} from './CheckboxItem';
import {IconButton} from '../buttons/IconButton';

type GeneralFormProps = {
  buttonText: string;
  formData: FormDataInterface[];
  inputHandler: (name: string, value: string) => void;
  submitHandler: () => void;
  hasCheckbox: boolean;
  checkboxHandler?: () => void;
  checkboxLabel?: string;
};

export const GeneralForm: React.FC<GeneralFormProps> = ({
  buttonText,
  formData,
  inputHandler,
  submitHandler,
  checkboxHandler,
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
            changeHandler={inputHandler}
          />
        ))}
        {hasCheckbox && (
          <CheckboxItem handler={checkboxHandler} actionName={checkboxLabel} />
        )}
      </div>
      <div className="d-in-block w-100">
        {buttonText && (
          <IconButton className="m-auto" type="update" onClick={submitHandler}>
            {buttonText}
          </IconButton>
        )}
      </div>
    </div>
  );
};
