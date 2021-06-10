import React from 'react';
import {ContentWrapper} from '../components/wrappers/ContentWrapper';
import {Label} from '../components/labels/Label';

export default function ErrorPage() {
  return (
    <ContentWrapper>
      <Label
        size="medium"
        text="Such directory does not exists"
        className="text-center"
      />
    </ContentWrapper>
  );
}
