import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

export interface WalletState {
  isError: boolean;
  wallet: ethers.Wallet | null;
  provider: ethers.providers.BaseProvider | null;
}

const initialState: WalletState = {
  isError: false,
  wallet: null,
  provider: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setWallet: (state, action: PayloadAction<ethers.Wallet>) => {
      state.wallet = action.payload;
    },
    setProvider: (
      state,
      action: PayloadAction<ethers.providers.BaseProvider>,
    ) => {
      state.provider = action.payload;
    },
  },
});

export const { setIsError, setWallet, setProvider } = walletSlice.actions;

export default walletSlice.reducer;
