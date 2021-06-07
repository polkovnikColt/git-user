import React from 'react';
import {ContentWrapper} from '../../../components/wrappers/ContentWrapper';
import {GeneralForm} from '../../../components/forms/GeneralForm';
import {useFormHandler} from '../../../hooks/useFormHandler';
import {authFormData} from './additional/service';

export default function AuthPage() {
  const {object, changeHandler} = useFormHandler({});

  console.log(object);

  return (
    <ContentWrapper>
      <GeneralForm
        formData={authFormData}
        submitHandler={() => {}}
        buttonText="Authenticate"
        inputHandler={changeHandler}
      />
    </ContentWrapper>
  );
}
