import Modal from '@ui/Modal/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IModalProps } from 'ts/interfaces/modal';

const SendModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {};

  return (
    <Modal
      showModalState={showModalState}
      showModalSetStateAction={showModalSetStateAction}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 justify-center'
      >
        <label className='flex gap-3 items-center'>
          Адрес
          <input
            className='input'
            {...register('address', { required: true })}
          />
        </label>
        <label className='flex gap-3 items-center'>
          Сумма
          <input
            className='input'
            {...register('amount', { required: true })}
          />
        </label>
        <input className='btn-primary' type='submit' value='Отправить' />
      </form>
    </Modal>
  );
};

export default SendModal;
