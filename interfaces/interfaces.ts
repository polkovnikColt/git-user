import {Component, ForwardRefExoticComponent} from 'react';

export interface LinkInterface {
  href: string;
  label: string;
}

export interface FormDataInterface {
  label: string;
  name: string;
  inputComponent: typeof Component | ForwardRefExoticComponent<any>;
  required?: boolean;
  message?: string;
}
