import React from 'react';
import {useVisibility} from '../../hooks/useVisibility';
import {IconButton} from '../buttons/IconButton';
import {BookOutlined} from '@ant-design/icons/lib';
import {Modal} from 'antd';

type CommonModalProps = {};

export const CommonModal: React.FC = ({children}) => {
  const {visible, onHide, onShow} = useVisibility(false);

  return (
    <>
      <IconButton
        type="add"
        onClick={onShow}
        icon={BookOutlined}
        className="p-1 m-1">
        New
      </IconButton>
      <Modal footer={[]} visible={visible} onCancel={onHide}>
        {children}
      </Modal>
    </>
  );
};
