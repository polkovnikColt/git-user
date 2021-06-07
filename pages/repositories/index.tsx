import React from 'react';
import {ContentWrapper} from '../../components/wrappers/ContentWrapper';
import {RepositoryTable} from '../../components/table/RepositoryTable';

export default function Repositories() {
  return (
    <ContentWrapper>
      <RepositoryTable />
    </ContentWrapper>
  );
}
