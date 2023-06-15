import { ROUTES } from 'components/nav/routes';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'redux/store';

const Wallet = () => {
  const { provider, wallet } = useSelector((state: RootState) => state.wallet);
  const navigate = useNavigate();
  const [userBalance, setUserBalance] = useState<string>('');

  const calcBalance = useCallback(async () => {
    console.log(provider);
    const balance = await provider?.getBalance(wallet?.address || '');
    console.log(balance);
    return ethers.utils.formatEther(balance || 0);
  }, [provider, wallet?.address]);

  useEffect(() => {
    (async () => {
      const balance = await calcBalance();
      setUserBalance(balance);
    })();
  }, [calcBalance]);

  useEffect(() => {
    if (!provider || !wallet) {
      navigate(ROUTES.base);
    }
  }, [navigate, provider, wallet]);

  if (provider === null || wallet === null) {
    return null;
  }

  return (
    <div className='flex flex-col justify-center align-middle items-center p-10 gap-12'>
      <span className='text-4xl'>${userBalance}</span>
      <div className='flex justify-between w-1/5'>
        <button>Отправить</button>
        <button>Получить</button>
      </div>
    </div>
  );
};

export default Wallet;
