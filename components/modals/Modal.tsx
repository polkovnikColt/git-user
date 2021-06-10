import React from 'react';
import {IconButton} from '../buttons/IconButton';
import {BookOutlined} from '@ant-design/icons/lib';
import {Modal as AntModal} from 'antd';

type ModalProps = {
  visible: boolean;
  onHide: () => void;
  onShow: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  onShow,
  onHide,
  visible,
}) => {
  return (
    <>
      <IconButton
        type="add"
        onClick={onShow}
        icon={BookOutlined}
        className="p-1 m-1">
        New
      </IconButton>
      <AntModal footer={[]} visible={visible} onCancel={onHide}>
        {children}
      </AntModal>
    </>
  );
};
