
'use client';

import{ createContext, useContext, useState } from 'react';

const BalanceContext = createContext({} as any);

export const BalanceProvider = ({ children }: { children: React.ReactNode }) => {
  const [balance, setBalance] = useState(100); 
  const [seedStock, setSeedStock] = useState(0); 

  
  const spendMoney = (amount: number) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      return true; 
    }
    return false; 
  };

  
  const earnMoney = (amount: any) => {
    setBalance(prev => prev + amount);
  };

  
  const buySeed = () => {
    if (spendMoney(GAME_PRICES.SEED_COST)) {
      setSeedStock(prev => prev + 1);
      return true;
    }
    return false;
  };

  
  const sellSeed = () => {
    if (seedStock > 0) {
      setSeedStock(prev => prev - 1);
      earnMoney(GAME_PRICES.SEED_COST);
      return true;
    }
    return false;
  };

  
  const plantSeed = () => {
    if (seedStock > 0) {
      setSeedStock(prev => prev - 1);
      return true;
    }
    return false;
  };

  const value = {
    balance,
    seedStock,
    spendMoney,
    earnMoney,
    buySeed,
    sellSeed,
    plantSeed
  };

  return (
    <BalanceContext.Provider value={value}>
      {children}
    </BalanceContext.Provider>
  );
};


export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    alert("useBalance must be used within a BalanceProvider");}
  return context;
};


export const GAME_PRICES = {
  SEED_COST: 10,
  HARVEST_REWARD: 25,       
};
