import { AppDispatch, ROUTES } from 'app';
import { setProvider, setWallet } from 'app/redux/slices/walletSlice';
import { ethers } from 'ethers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Modal, IModalProps, SEED_PHRASE_SIZE } from 'shared/ui';

const ImportWalletModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();
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
      <form onSubmit={handleSubmit(onSubmit)} className='input-grid-wrapper'>
        {renderInputsArray().map((inputElement) => (
          <div className='input-grid' key={inputElement}>
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
