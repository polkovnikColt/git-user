import React from 'react';
import {ContentWrapper} from '../../components/wrappers/ContentWrapper';
import {RepositoryTable} from '../../components/table/RepositoryTable';
import {Modal} from '../../components/modals/Modal';
import {Form} from '../../components/forms/Form';
import {useFormHandler} from '../../hooks/useFormHandler';
import {
  columns,
  createRepositoryFormData,
  tableData,
} from '../../utils/repositories/repositoriesService';
import {PaddingWrapper} from '../../components/wrappers/PaddingWrapper';
import {useVisibility} from '../../hooks/useVisibility';

export default function Repositories() {
  const {formInput, handleChange} = useFormHandler({});
  const {visible, onHide, onShow} = useVisibility(false);

  return (
    <ContentWrapper>
      <PaddingWrapper>
        <Modal visible={visible} onHide={onHide} onShow={onShow}>
          <Form
            hasCheckbox
            handleCheckbox={() => {}}
            checkboxLabel="Visible?"
            buttonText="Create new"
            formData={createRepositoryFormData}
            handleChange={handleChange}
            handleSubmit={() => {}}
          />
        </Modal>
        <RepositoryTable columns={columns} dataSource={tableData} />
      </PaddingWrapper>
    </ContentWrapper>
  );
}
