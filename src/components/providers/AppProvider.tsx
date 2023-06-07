import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface IProps {
  children: ReactNode;
}
const AppProvider = ({ children }: IProps) => {
  const isError = useSelector((state: RootState) => state.wallet.isError);

  return <>{children}</>;
};

export default AppProvider;
