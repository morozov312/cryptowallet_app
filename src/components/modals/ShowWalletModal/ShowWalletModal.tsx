import Modal from '@ui/Modal/Modal';
import { QRCodeSVG } from 'qrcode.react';
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
      <div className='flex flex-col gap-6 justify-center align-middle items-center'>
        <QRCodeSVG value={address} level='Q' />
        <p>{address}</p>
      </div>
    </Modal>
  );
};

export default ShowWalletModal;
