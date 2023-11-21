import React, { useState } from 'react';
import { NavBar } from './Components/Navbar';
import { CartWidget } from './Components/CartWidget';
import { ItemListContainer } from './Components/ItemList';
import ItemCount from './Components/ItemCount';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<number>(0);

  const handleAddToCart = (quantity: number) => {
    setCartItems(cartItems + quantity);
  };

  return (
    <React.Fragment>
      <NavBar cartItems={cartItems} />
      <CartWidget cartItems={cartItems} />
      <ItemListContainer greeting={'Bem vindo a Nerd Store'} />
      {/* Exemplo de uso do componente ItemCount */}
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </React.Fragment>
  );
};

export default App;


