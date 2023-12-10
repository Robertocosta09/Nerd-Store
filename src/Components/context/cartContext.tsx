import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ICart {
  isCart: boolean;
  setIsCart: Dispatch<SetStateAction<boolean>>;
}

const cartContextDefault = {
  isCart: false,
  setIsCart: () => null,
};

const CartContext = createContext<ICart>(cartContextDefault);

interface IProvider {
  children: ReactNode;
}

const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [isCart, setIsCart] = useState<boolean>(false);

  const contextValue: ICart = {
    isCart,
    setIsCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { useCart, CartProvider };
