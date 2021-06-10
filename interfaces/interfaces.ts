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

export interface ColumnsInterface {
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

export interface RepositoryTableInterface {
  key: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  diskUsage: string;
}
