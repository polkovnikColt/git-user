import {Component, ForwardRefExoticComponent} from 'react';

export interface LinkI {
  href: string;
  label: string;
}

export interface FormDataI {
  label: string;
  name: string;
  inputComponent: typeof Component | ForwardRefExoticComponent<any>;
  required?: boolean;
  message?: string;
}

export interface ColumnsI {
  title: string;
  dataIndex: string;
  key: string;
  align?: string;
  render?: (args) => JSX.Element;
  sorter?: {
    compare: (arg1: any, arg2: any) => any;
    multiple: number;
  };
}

export interface RepositoryTableI {
  key: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  diskUsage: string;
}
