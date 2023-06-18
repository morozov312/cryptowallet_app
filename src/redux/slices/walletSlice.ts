import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

export interface WalletState {
  wallet: ethers.Wallet | null;
  provider: ethers.providers.BaseProvider | null;
}

const initialState: WalletState = {
  wallet: null,
  provider: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
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

export const { setWallet, setProvider } = walletSlice.actions;

export default walletSlice.reducer;
