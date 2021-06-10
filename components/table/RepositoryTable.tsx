import React from 'react';
import {Table} from 'antd';
import {
  ColumnsInterface,
  RepositoryTableInterface,
} from '../../interfaces/interfaces';
import {DescriptionLabel} from '../labels/DescriptionLabel';

type RepositoryTableProps = {
  columns: ColumnsInterface[];
  dataSource: RepositoryTableInterface[];
};

export const RepositoryTable: React.FC<RepositoryTableProps> = ({
  columns,
  dataSource,
}) => (
  <>
    <Table dataSource={dataSource} columns={columns} />
    <DescriptionLabel
      className="p-1"
      description="Total count"
      text={dataSource.length.toString()}
    />
  </>
);
