import { Dispatch, ReactNode } from 'react';

export interface IModalProps {
  showModalState: boolean;
  showModalSetStateAction: Dispatch<boolean>;
  children?: ReactNode;
}
