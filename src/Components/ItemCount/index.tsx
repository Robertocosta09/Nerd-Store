import React, { useState } from 'react';

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrease}
        disabled={count <= 1}
        className="bg-gray-300 px-3 py-2 rounded"
      >
        -
      </button>
      <span className="text-xl">{count}</span>
      <button
        onClick={handleIncrease}
        disabled={count >= stock}
        className="bg-gray-300 px-3 py-2 rounded"
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        disabled={stock === 0 || count === 0 || count > stock}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;


