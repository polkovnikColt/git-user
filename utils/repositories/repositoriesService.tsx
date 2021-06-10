import React from 'react';
import {Input} from 'antd';
import {Label} from '../../components/labels/Label';
import {Followers} from '../../components/followers/Followers';
import {ColumnsInterface, FormDataInterface} from '../../interfaces/interfaces';

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

export const tableData = [
  {
    key: 1,
    name: 'Repository 1',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 100,
    diskUsage: '2mb',
  },
  {
    key: 2,
    name: 'Repository 2',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 17,
    diskUsage: '2mb',
  },
  {
    key: 3,
    name: 'Repository 3',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 3,
    diskUsage: '2mb',
  },
  {
    key: 4,
    name: 'Repository 4',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 1,
    diskUsage: '2mb',
  },
  {
    key: 5,
    name: 'Repository 5',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 10,
    diskUsage: '2mb',
  },
  {
    key: 6,
    name: 'Repository 6',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().getHours().toString().concat(' ago...'),
    stargazerCount: 13,
    diskUsage: '2mb',
  },
];

export const columns: ColumnsInterface[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: text => (
      <Label size="small" text={text} href={`/repositories/${text}`} isLink />
    ),
    sorter: {
      compare: (a, b) => a.name.length - b.name.length,
      multiple: 3,
    },
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    sorter: {
      compare: (a, b) => a.date - b.date,
      multiple: 3,
    },
  },
  {
    title: 'Updated',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center',
    sorter: {
      compare: (a, b) => a.updated - b.updated,
      multiple: 3,
    },
  },
  {
    title: 'Followers',
    dataIndex: 'stargazerCount',
    key: 'stargazerCount',
    align: 'center',
    render: followers => <Followers followersNumber={followers} />,
    sorter: {
      compare: (a, b) => a.followers - b.followers,
      multiple: 3,
    },
  },
  {
    title: 'Size',
    dataIndex: 'diskUsage',
    key: 'diskUsage',
    align: 'center',
    sorter: {
      compare: (a, b) => a.size - b.size,
      multiple: 3,
    },
  },
];
