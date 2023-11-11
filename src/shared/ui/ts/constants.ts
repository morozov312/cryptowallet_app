export const SEED_PHRASE_SIZE: number = 12;

export const ERC_20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function transfer(address to, uint amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint amount)',
  'function name() view returns (string)',
];

export const USDT_CONTRACT = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
