// ItemCount.tsx
import React, { useState, useEffect } from 'react';

interface ItemCountProps {
  onAdd: (count: number) => void;
  stock: number;
  isStockZero: boolean;
}

const ItemCount: React.FC<ItemCountProps> = ({ onAdd, stock, isStockZero }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Resetar o contador se o estoque mudar para zero
    if (isStockZero) {
      setCount(1);
    }
  }, [isStockZero]);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
    setCount(1); // Resetar o contador após adicionar ao carrinho
  };

  return (
    <div>
      <button onClick={handleDecrement} className="bg-gray-300 px-4 py-2 rounded" disabled={isStockZero}>
        -
      </button>
      <span className="mx-4">{count}</span>
      <button onClick={handleIncrement} className="bg-gray-300 px-4 py-2 rounded" disabled={isStockZero}>
        +
      </button>
      <button
        onClick={handleAddToCart}
        disabled={isStockZero || count === 0}
        className={`${
          isStockZero ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'
        } text-white px-4 py-2 rounded`}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;










