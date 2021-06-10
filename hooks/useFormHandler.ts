import {useState} from 'react';

export const useFormHandler = (initState = {}) => {
  const [formInput, setFormInput] = useState(initState);

  const handleChange = (name: string, value: string): void => {
    setFormInput({...formInput, [name]: value});
  };

  return {formInput, handleChange};
};
