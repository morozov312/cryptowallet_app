import { RootState } from '../../../redux/store';
import Modal from '@ui/Modal/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IModalProps } from 'ts/interfaces/modal';

type FormValues = {
  address: string;
  amount: string;
};

const SendModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { wallet } = useSelector((state: RootState) => state.wallet);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues): Promise<void> => {
    try {
      if (wallet) {
        const transaction = await wallet.sendTransaction({
          to: data.address,
          value: data.amount,
        });
        transaction.wait();
        toast.success(`${data.amount} успешно отправены на ${data.address}`);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

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
