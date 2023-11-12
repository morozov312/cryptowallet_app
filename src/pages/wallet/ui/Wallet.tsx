import { ROUTES } from 'app/nav/routes';
import { RootState } from 'app/redux/store';
import axios from 'axios';
import { BigNumber, utils } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { SendModal, ShowWalletModal } from 'widgets';

export const Wallet = () => {
  const { provider, wallet } = useSelector((state: RootState) => state.wallet);
  const navigate = useNavigate();
  const [userUSDBalance, setUserUSDBalance] = useState<string>('');
  const [userETHBalance, setUserETHBalance] = useState<string>('');
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);
  const [sendModal, setSendModal] = useState<boolean>(false);

  const calcBalance = useCallback(async (): Promise<BigNumber> => {
    return ((await provider?.getBalance(wallet?.address || '')) ||
      0) as BigNumber;
  }, [provider, wallet?.address]);

  const refreshBalance = useCallback(async () => {
    try {
      setUserETHBalance('');
      setUserUSDBalance('');
      const balance = await calcBalance();
      const formattedBalance = utils.formatEther(balance);
      const { data: pricesArr } = await axios.get(
        'https://api.coinbase.com/v2/exchange-rates?currency=ETH',
      );
      setUserUSDBalance(
        (pricesArr.data.rates.USD * Number(formattedBalance)).toFixed(4),
      );
      setUserETHBalance(formattedBalance);
    } catch (e: any) {
      toast.error(e.message);
    }
  }, [calcBalance]);

  useEffect(() => {
    refreshBalance().catch(console.error);
  }, [refreshBalance]);

  useEffect(() => {
    if (!provider || !wallet) {
      navigate(ROUTES.base);
    }
  }, [navigate, provider, wallet]);

  return (
    <div className='flex flex-col justify-center align-middle items-center p-10 gap-16'>
      <ShowWalletModal
        address={wallet?.address || ''}
        showModalState={showWalletModal}
        showModalSetStateAction={setShowWalletModal}
      />
      <SendModal
        showModalState={sendModal}
        showModalSetStateAction={setSendModal}
      />
      {userETHBalance.length ? (
        <span className='md:text-4xl text-2xl'>
          ETH {userETHBalance} / $ {userUSDBalance}
        </span>
      ) : (
        <span className='animate-pulse'>Загрузка баланса</span>
      )}
      <div className='flex justify-between gap-8 flex-col md:flex-row'>
        <button onClick={() => setSendModal(true)} className='btn-primary'>
          Отправить
        </button>
        <button
          onClick={() => setShowWalletModal(true)}
          className='btn-primary'
        >
          Получить
        </button>
        <button onClick={refreshBalance} className='btn-primary'>
          Обновить баланс
        </button>
      </div>
    </div>
  );
};
