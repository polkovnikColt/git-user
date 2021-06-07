import React from 'react';
import {Button} from 'antd';
import {FormDataInterface} from '../../interfaces/interfaces';
import {FormItem} from './FormItem';

type GeneralFormProps = {
  buttonText: string;
  formData: FormDataInterface[];
  inputHandler: (name: string, value: string) => void;
  submitHandler: () => void;
};

export const GeneralForm: React.FC<GeneralFormProps> = ({
  buttonText,
  formData,
  inputHandler,
  submitHandler,
}) => {
  return (
    <div className="form-padding">
      {formData.map((formItem: FormDataInterface) => (
        <FormItem
          name={formItem.name}
          label={formItem.label}
          message={formItem.message}
          InputComponent={formItem.inputComponent}
          changeHandler={inputHandler}
        />
      ))}
      {buttonText && (
        <Button onClick={submitHandler} type="primary">
          {buttonText}
        </Button>
      )}
    </div>
  );
};
