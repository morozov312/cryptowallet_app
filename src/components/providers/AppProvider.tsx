import ErrorModal from 'components/modals/ErrorModal/ErrorModal';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsError } from 'redux/slices/walletSlice';
import { RootState } from 'redux/store';

interface IProps {
  children: ReactNode;
}
const AppProvider = ({ children }: IProps) => {
  const isError = useSelector((state: RootState) => state.wallet.isError);
  const dispatch = useDispatch();

  return (
    <>
      <ErrorModal
        showModalState={isError}
        showModalSetStateAction={() => dispatch(setIsError(false))}
      />
      {children}
    </>
  );
};

export default AppProvider;
