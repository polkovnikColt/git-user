import React from 'react';
import {useRouter} from 'next/router';
import {ContentWrapper} from '../../../components/wrappers/ContentWrapper';
import {Card} from '../../../components/cards/Card';
import {Row} from 'antd';
import {Label} from '../../../components/labels/Label';
import {PaddingWrapper} from '../../../components/wrappers/PaddingWrapper';
import {DescriptionLabel} from '../../../components/labels/DescriptionLabel';

export default function OneRepository() {
  const {query} = useRouter();

  return (
    <ContentWrapper>
      <Row align="middle" justify="center">
        <PaddingWrapper>
          <Card
            cardTitle={`${query.id}`}
            cardExtra={
              <Label size="small" text="Return" href="/repositories" isLink />
            }>
            <div>
              <DescriptionLabel description="Date" text="Date" />
              <DescriptionLabel description="Updated" text="Updated" />
              <DescriptionLabel description="Followers" text="Followers" />
              <DescriptionLabel description="size" text="size" />
              <Label
                size="small"
                text="Description"
                className="text-center w-100"
              />
            </div>
          </Card>
        </PaddingWrapper>
      </Row>
    </ContentWrapper>
  );
}
