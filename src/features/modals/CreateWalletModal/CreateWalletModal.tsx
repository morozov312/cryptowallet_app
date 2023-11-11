import Modal from 'shared/ui/components/Modal/Modal';
import React from 'react';
import { IModalProps } from 'shared/ui/ts/modalInterfaces';

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
      <div className='input-grid-wrapper'>
        {phrase.split(' ').map((word, index) => (
          <div className='input-grid' key={word}>
            <span>{index + 1}: </span>
            <input
              className='input sm:mr-3'
              key={word}
              value={word}
              readOnly={true}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CreateWalletModal;
