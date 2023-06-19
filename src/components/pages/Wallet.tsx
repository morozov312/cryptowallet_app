import ShowWalletModal from '../modals/ShowWalletModal/ShowWalletModal';
import axios from 'axios';
import { ROUTES } from 'components/nav/routes';
import { BigNumber } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';

const Wallet = () => {
  const { provider, wallet } = useSelector((state: RootState) => state.wallet);
  const navigate = useNavigate();
  const [userUSDBalance, setUserUSDBalance] = useState<string>('');
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);

  const calcBalance = useCallback(async (): Promise<string> => {
    const balance = ((await provider?.getBalance(wallet?.address || '')) ||
      0) as BigNumber;
    const { data: pricesArr } = await axios.get(
      'https://api.coinbase.com/v2/exchange-rates?currency=ETH',
    );
    return balance
      .mul(BigNumber.from(parseInt(pricesArr.data.rates.USD)))
      .toString();
  }, [provider, wallet?.address]);

  useEffect(() => {
    (async () => {
      try {
        const balance = await calcBalance();
        setUserUSDBalance(balance);
      } catch (e: any) {
        toast.error(e.message);
      }
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

  console.log(provider, wallet);

  return (
    <div className='flex flex-col justify-center align-middle items-center p-10 gap-16'>
      <ShowWalletModal
        address={wallet.address}
        showModalState={showWalletModal}
        showModalSetStateAction={setShowWalletModal}
      />
      <span className='text-4xl'>${userUSDBalance}</span>
      <div className='flex justify-between w-1/3'>
        <button className='btn-primary'>Отправить</button>
        <button
          onClick={() => setShowWalletModal(true)}
          className='btn-primary'
        >
          Получить
        </button>
      </div>
    </div>
  );
};

export default Wallet;
