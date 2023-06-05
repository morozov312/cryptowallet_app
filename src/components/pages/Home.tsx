import CreateWalletModal from 'components/modals/CreateWalletModal/CreateWalletModal';
import React, { useState } from 'react';

const Home = () => {
  const [showCreateWalletModal, setShowCreateWalletModal] =
    useState<boolean>(false);

  return (
    <div className='flex flex-col justify-center mt-20 text-center gap-7'>
      <CreateWalletModal
        showModalState={showCreateWalletModal}
        showModalSetStateAction={setShowCreateWalletModal}
      />
      <h1>Добро пожаловать!</h1>
      <span>Импортируйте существующий кошелек или создайте новый</span>
      <div className='flex justify-between w-1/4 mx-auto'>
        <button
          onClick={() => setShowCreateWalletModal(true)}
          className='btn-primary'
        >
          Создать
        </button>
        <button className='btn-primary'>Импорт</button>
      </div>
    </div>
  );
};

export default Home;
