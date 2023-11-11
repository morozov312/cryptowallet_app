import Modal from 'shared/ui/components/Modal/Modal';
import { QRCodeSVG } from 'qrcode.react';
import { IModalProps } from 'shared/ui/ts/modalInterfaces';

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
        <p className='text-center text-xs md:text-base'>
          Отправляйте только Ethereum(ETH) на этот адрес, в противном случае
          токены могут быть утеряны.
        </p>
        <QRCodeSVG value={address} level='Q' />
        <p className='text-xs md:text-base'>{address}</p>
      </div>
    </Modal>
  );
};

export default ShowWalletModal;
