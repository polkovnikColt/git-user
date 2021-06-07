import {Rating} from '../../rating/Rating';
import {Label} from '../../labels/Label';
import React from 'react';

export const tableData = [
  {
    key: 1,
    name: '1',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
  {
    key: 2,
    name: '2',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
  {
    key: 3,
    name: '3',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
  {
    key: 4,
    name: '4',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
  {
    key: 5,
    name: '5',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
  {
    key: 6,
    name: '6',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    size: '2mb',
  },
];

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Label text={text} href={`/repositories/${text}`} isLink />,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated',
  },
  {
    title: 'Rating',
    dataIndex: '',
    key: 'rating',
    render: Rating,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
];
