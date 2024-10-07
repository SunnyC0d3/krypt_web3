import abi from './Transaction.json';

export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
export const contractABI = abi.abi;