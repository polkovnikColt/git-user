import React from 'react';
import {Table} from 'antd';
import {columns, tableData} from './additional/service';
import {PaddingWrapper} from '../wrappers/PaddingWrapper';

export const RepositoryTable: React.FC = () => {
  return (
    <PaddingWrapper>
      <Table dataSource={tableData} columns={columns} />
    </PaddingWrapper>
  );
};
