import React from 'react';
import {ContentWrapper} from '../../../components/wrappers/ContentWrapper';
import {Form} from '../../../components/forms/Form';
import {useFormHandler} from '../../../hooks/useFormHandler';
import {authFormData} from '../../../utils/auth/authService';
import {Label} from '../../../components/labels/Label';
import {PaddingWrapper} from '../../../components/wrappers/PaddingWrapper';

export default function AuthPage() {
  const {formInput, handleChange} = useFormHandler({});

  return (
    <ContentWrapper>
      <PaddingWrapper className="d-in-block w-100 text-center">
        <div className="m-auto">
          <Label size="big" text="Welcome to git user application" />
        </div>
      </PaddingWrapper>
      <Form
        hasCheckbox={false}
        formData={authFormData}
        submitHandler={() => {}}
        buttonText="Authenticate"
        inputHandler={handleChange}
      />
    </ContentWrapper>
  );
}
