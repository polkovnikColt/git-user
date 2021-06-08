import React from 'react';
import {ContentWrapper} from '../../components/wrappers/ContentWrapper';
import {RepositoryTable} from '../../components/table/RepositoryTable';
import {CommonModal} from '../../components/modals/CommonModal';
import {GeneralForm} from '../../components/forms/GeneralForm';
import {useFormHandler} from '../../hooks/useFormHandler';
import {createRepositoryFormData} from '../../utils/repositories/service';
import {PaddingWrapper} from '../../components/wrappers/PaddingWrapper';

export default function Repositories() {
  const {object, changeHandler} = useFormHandler({});

  return (
    <ContentWrapper>
      <PaddingWrapper>
        <CommonModal>
          <GeneralForm
            hasCheckbox={true}
            checkboxHandler={() => {}}
            checkboxLabel="Visible?"
            buttonText="Create new"
            formData={createRepositoryFormData}
            inputHandler={changeHandler}
            submitHandler={() => {}}
          />
        </CommonModal>
        <RepositoryTable />;
      </PaddingWrapper>
    </ContentWrapper>
  );
}
