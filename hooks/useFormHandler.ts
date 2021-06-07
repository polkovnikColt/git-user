import {useState} from 'react';

export const useFormHandler = (initState = {}) => {
  const [object, setObject] = useState(initState);

  const changeHandler = (name: string, value: string): void => {
    setObject({...object, [name]: value});
  };

  return {object, changeHandler};
};
