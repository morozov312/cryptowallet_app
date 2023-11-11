import React from 'react';
import { IModalProps } from 'shared/ui';

export const Modal = ({
  showModalState,
  showModalSetStateAction,
  children,
}: IModalProps) => {
  if (!showModalState) return null;

  const onClose = () => {
    showModalSetStateAction(false);
  };

  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative w-auto my-6 mx-auto max-w-3xl'>
        <div className='bg-modalColor border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-10'>
          <svg
            onClick={onClose}
            className='absolute right-4 top-4 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M0 12.6L1.4 14 7 8.4 12.6 14 14 12.6 8.4 7 14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6Z'
              fill='#2896a5'
            ></path>
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
};
