

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ItemProps {
  id: number;
  full_name: string;
  description: string;
  price: number;
  owner: {
    avatar_url: string;
  };
  stock: number;
}

interface CartItem extends ItemProps {
  name: ReactNode;
  quantity: number;
}

interface ICart {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addItem: (item: ItemProps, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}

const cartContextDefault = {
  cartItems: [],
  setCartItems: () => null,
  addItem: (item: ItemProps, quantity: number) => {},
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

  const addItem = (item: ItemProps, quantity: number) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        ) as CartItem[] 
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity }] as CartItem[]); // Garantindo que o array retornado seja de CartItem
    }
  };

  const removeItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== itemId));
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id: number) => {
    return cartItems.some((cartItem) => cartItem.id === id);
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




