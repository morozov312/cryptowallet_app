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
    <>
      <p>{userBalance}</p>
    </>
  );
};

export default Wallet;
