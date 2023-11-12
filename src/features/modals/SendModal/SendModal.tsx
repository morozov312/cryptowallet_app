import { RootState } from 'app';
import { ethers, utils } from 'ethers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Modal, IModalProps } from 'shared/ui';

type FormValues = {
  address: string;
  amount: string;
};

const SendModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { wallet, provider } = useSelector((state: RootState) => state.wallet);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues): Promise<void> => {
    const isValidAddress = utils.isAddress(data.address);
    if (!isValidAddress) {
      toast.error('Адресс введен неправильно!');
      return;
    }
    try {
      if (wallet && provider) {
        const walletSigner = wallet.connect(provider);
        const gas = provider.getGasPrice();
        const tx = {
          from: wallet.address,
          to: data.address,
          value: ethers.utils.parseEther(data.amount),
          nonce: provider.getTransactionCount(wallet.address, 'latest'),
          gasLimit: ethers.utils.hexlify(0x100000),
          gasPrice: gas,
        };
        const transaction = await walletSigner.sendTransaction(tx);
        transaction.wait();
        toast.success(`${data.amount} успешно отправены на ${data.address}`);
      }
    } catch (e: any) {
      console.log(e);
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
        className='flex flex-col gap-8 justify-center min-w-[40vw]'
      >
        <label className='flex gap-3 items-center'>
          Адрес
          <input
            className='input w-full'
            {...register('address', { required: true })}
          />
        </label>
        <label className='flex gap-3 items-center'>
          Сумма
          <input
            className='input w-full'
            {...register('amount', { required: true })}
          />
        </label>
        <input className='btn-primary' type='submit' value='Отправить' />
      </form>
    </Modal>
  );
};

export default SendModal;
