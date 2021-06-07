import React from 'react';
import {useRouter} from 'next/router';
import {ContentWrapper} from '../../../components/wrappers/ContentWrapper';

export default function OneRepository() {
  const {query} = useRouter();

  return (
    <ContentWrapper>
      <div>Repository {query.id}</div>
    </ContentWrapper>
  );
}
