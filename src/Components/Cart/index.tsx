import React from 'react';
import { useCart } from '../context/cartContext';

const Cart: React.FC = () => {
  const { cartItems, clear, removeItem } = useCart();

  const handleRemoveItem = (itemId: number) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clear();
  };

  return (
    <div>
      <h2>Seu Carrinho</h2>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remover Item</button>
            </div>
          ))}

          <p>Preço Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <button onClick={handleClearCart}>Limpar Carrinho</button>
        </div>
      ) : (
        <div>
          <p>Não há itens no carrinho.</p>
          <p>
            <a href="/">Volte para a página inicial</a> para pesquisar ou comprar algo.
          </p>
        </div>
      )}
    </div>
  );
};

export { Cart };
