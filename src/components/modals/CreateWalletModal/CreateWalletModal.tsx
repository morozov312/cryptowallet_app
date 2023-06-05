import Modal from '@ui/Modal/Modal';
import React from 'react';
import { IModalProps } from 'ts/interfaces/modal';

interface IProps extends IModalProps {
  phrase: string;
}

const CreateWalletModal = ({
  showModalState,
  showModalSetStateAction,
  phrase,
}: IProps) => {
  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      <h2>Ваш кошелек успешно создан!</h2>
      <p>
        Пожалуйста запомните seed фразу или запишите ее в надежное место. Вы
        можете войти в свой кошелек используя эту фразу.
      </p>
      <div className='flex justify-between gap-3.5 flex-wrap mt-5'>
        {phrase.split(' ').map((word, index) => (
          <div>
            <span>{index + 1}: </span>
            <input className='input' key={word} value={word} readOnly={true} />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CreateWalletModal;
