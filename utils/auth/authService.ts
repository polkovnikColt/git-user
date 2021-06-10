import {Input} from 'antd';
import {FormDataI} from '../../interfaces/interfaces';

export const authFormData: FormDataI[] = [
  {
    name: 'token',
    inputComponent: Input,
    required: false,
    label: 'Github token',
  },
];
