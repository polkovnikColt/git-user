import {FormDataInterface} from '../../interfaces/interfaces';
import {Input} from 'antd';

export const createRepositoryFormData: FormDataInterface[] = [
  {
    name: 'name',
    label: 'Name',
    inputComponent: Input,
    required: true,
  },
  {
    name: 'description',
    label: 'Description',
    inputComponent: Input.TextArea,
    required: true,
  },
];
