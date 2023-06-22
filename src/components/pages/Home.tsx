import walletImage from 'assets/images/wallet.png';
import CreateWalletModal from 'components/modals/CreateWalletModal/CreateWalletModal';
import ImportWalletModal from 'components/modals/ImportWalletModal/ImportWalletModal';
import { ethers } from 'ethers';
import React, { useState } from 'react';

const Home = () => {
  const [showCreateWalletModal, setShowCreateWalletModal] =
    useState<boolean>(false);
  const [showImportWalletModal, setShowImportWalletModal] =
    useState<boolean>(false);
  const [mnemonicPhrase, setMnemonicPhrase] = useState<string | null>(null);

  const onCreateWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setMnemonicPhrase(wallet.mnemonic?.phrase || null);
    setShowCreateWalletModal(true);
  };

  const onImportWallet = () => {
    setShowImportWalletModal(true);
  };

  return (
    <div className='flex flex-col justify-center mt-20 text-center gap-7'>
      {mnemonicPhrase && (
        <CreateWalletModal
          showModalState={showCreateWalletModal}
          showModalSetStateAction={setShowCreateWalletModal}
          phrase={mnemonicPhrase}
        />
      )}
      <ImportWalletModal
        showModalState={showImportWalletModal}
        showModalSetStateAction={setShowImportWalletModal}
      />
      <h1 className='font-semibold text-xl'>Добро пожаловать!</h1>
      <span className='text-lg'>
        Импортируйте существующий кошелек или создайте новый
      </span>
      <img className='max-w-xs mx-auto' src={walletImage} alt='cryptowallet' />
      <div className='flex justify-between mx-auto flex-col gap-8 lg:flex-row lg:w-1/4 '>
        <button onClick={onCreateWallet} className='btn-primary'>
          Создать
        </button>
        <button onClick={onImportWallet} className='btn-primary'>
          Импорт
        </button>
      </div>
    </div>
  );
};

export default Home;
