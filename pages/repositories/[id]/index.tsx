import React from 'react';
import {useRouter} from 'next/router';
import {ContentWrapper} from '../../../components/wrappers/ContentWrapper';
import {CardItem} from '../../../components/cards/CardItem';
import {Row} from 'antd';

export default function OneRepository() {
  const {query} = useRouter();

  return (
    <ContentWrapper>
      <div>Repository {query.id}</div>
      <Row align="middle" justify="center">
        <CardItem />
      </Row>
    </ContentWrapper>
  );
}
