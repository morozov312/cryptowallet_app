import Modal from '@ui/Modal/Modal';
import { ROUTES } from 'components/nav/routes';
import { ethers } from 'ethers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setIsError, setProvider, setWallet } from 'redux/slices/walletSlice';
import { SEED_PHRASE_SIZE } from 'ts/constants';
import { IModalProps } from 'ts/interfaces/modal';

const ImportWalletModal = ({
  showModalState,
  showModalSetStateAction,
}: IModalProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const phrase: string[] = [];
    for (const dataKey in data) {
      phrase.push(data[dataKey]);
    }
    const phraseStr: string = phrase.join(' ');
    try {
      const wallet = ethers.Wallet.fromPhrase(phraseStr);
      const provider = new ethers.JsonRpcProvider(process.env.INFURA_NODE_LINK);
      dispatch(setWallet(wallet));
      dispatch(setProvider(provider));
      navigate(ROUTES.account);
    } catch {
      showModalSetStateAction(false);
      dispatch(setIsError(true));
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
