import {Followers} from '../../rating/Followers';
import {Label} from '../../labels/Label';
import React from 'react';

export const tableData = [
  {
    key: 1,
    name: '1',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
  {
    key: 2,
    name: '2',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
  {
    key: 3,
    name: '3',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
  {
    key: 4,
    name: '4',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
  {
    key: 5,
    name: '5',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
  {
    key: 6,
    name: '6',
    date: new Date().toLocaleDateString(),
    updated: new Date().getHours().toString().concat(' ago...'),
    followers: 13,
    size: '2mb',
  },
];

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: text => (
      <Label size="small" text={text} href={`/repositories/${text}`} isLink />
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated',
    align: 'center',
  },
  {
    title: 'Followers',
    dataIndex: 'followers',
    key: 'followers',
    align: 'center',
    render: followers => <Followers followersNumber={followers} />,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    align: 'center',
  },
];
