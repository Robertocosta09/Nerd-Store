

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  // defina a estrutura do item do carrinho aqui
}

interface ICart {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}

const cartContextDefault = {
  cartItems: [],
  setCartItems: () => null,
  addItem: (item: CartItem, quantity: number) => {},
  removeItem: (itemId: number) => {},
  clear: () => {},
  isInCart: (id: number) => false,
};

const CartContext = createContext<ICart>(cartContextDefault);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem, quantity: number) => {
    // lógica para adicionar um item ao carrinho
  };

  const removeItem = (itemId: number) => {
    // lógica para remover um item do carrinho
  };

  const clear = () => {
    // lógica para limpar o carrinho
  };

  const isInCart = (id: number) => {
    // lógica para verificar se um item está no carrinho
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };


