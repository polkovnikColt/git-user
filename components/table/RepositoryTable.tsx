import React from 'react';
import {Table} from 'antd';
import {columns, tableData} from './additional/service';

export const RepositoryTable: React.FC = () => {
  return <Table dataSource={tableData} columns={columns} />;
};
