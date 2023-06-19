import Modal from '@ui/Modal/Modal';
import { IModalProps } from 'ts/interfaces/modal';

interface IShowWalletModal extends IModalProps {
  address: string;
}

const ShowWalletModal = ({
  showModalState,
  showModalSetStateAction,
  address,
}: IShowWalletModal) => {
  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      <p>{address}</p>
    </Modal>
  );
};

export default ShowWalletModal;
