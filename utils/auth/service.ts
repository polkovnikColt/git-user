import {FormDataInterface} from '../../interfaces/interfaces';
import {Input} from 'antd';

export const authFormData: FormDataInterface[] = [
  {
    name: 'token',
    inputComponent: Input,
    required: false,
    label: 'Github token',
  },
];
