import Modal from '@ui/Modal/Modal';
import { ROUTES } from 'components/nav/routes';
import { ethers } from 'ethers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setProvider, setWallet } from 'redux/slices/walletSlice';
import { SEED_PHRASE_SIZE } from 'ts/constants';
import { IModalProps } from 'ts/interfaces/modal';

const ImportWalletModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any): void => {
    const phrase: string[] = [];
    for (const dataKey in data) {
      phrase.push(data[dataKey]);
    }
    const phraseStr: string = phrase.join(' ');
    try {
      const wallet = ethers.Wallet.fromMnemonic(phraseStr);
      const provider = ethers.getDefaultProvider(
        process.env.INFURA_MAINNET_NODE_LINK,
      );
      dispatch(setWallet(wallet));
      dispatch(setProvider(provider));
      navigate(ROUTES.wallet);
    } catch (e: any) {
      toast.error(e.message);
    }
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
        className='flex flex-wrap mt-5 justify-center sm:justify-between'
      >
        {renderInputsArray().map((inputElement) => (
          <div
            className='flex gap-2 items-center justify-between basis-1/3 py-2 sm:py-6'
            key={inputElement}
          >
            <span>{inputElement}: </span>
            <input
              className='input sm:mr-3'
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
