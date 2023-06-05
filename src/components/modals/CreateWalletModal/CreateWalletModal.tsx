import Modal from '@ui/Modal/Modal';
import React from 'react';
import { IModalProps } from 'ts/interfaces/modal';

const CreateWalletModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      {}
    </Modal>
  );
};

export default CreateWalletModal;
