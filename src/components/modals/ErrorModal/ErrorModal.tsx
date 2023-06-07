import Modal from '@ui/Modal/Modal';
import { IModalProps } from 'ts/interfaces/modal';

const ErrorModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      <h2>Ошибка! Что то пошло не так!</h2>
    </Modal>
  );
};

export default ErrorModal;
