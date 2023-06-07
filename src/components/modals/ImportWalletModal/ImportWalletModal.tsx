import Modal from '@ui/Modal/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SEED_PHRASE_SIZE } from 'ts/constants';
import { IModalProps } from 'ts/interfaces/modal';

const ImportWalletModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const phrase = [];
    for (const dataKey in data) {
      phrase.push(data[dataKey]);
    }
    console.log(phrase.join(' '));
  };

  const renderInputsArray = () => {
    return Array.from({ length: SEED_PHRASE_SIZE }, (_, i) => i + 1);
  };

  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      <h2>Введите seed фразу для входа</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex justify-between gap-3.5 flex-wrap mt-5'
      >
        {renderInputsArray().map((inputElement) => (
          <div key={inputElement}>
            <span>{inputElement}: </span>
            <input
              className='input'
              {...register(`input${inputElement}`, { required: true })}
            />
          </div>
        ))}
        <div className='flex justify-center w-full'>
          <input className='btn-primary' type='submit' value='Войти' />
        </div>
      </form>
    </Modal>
  );
};

export default ImportWalletModal;
