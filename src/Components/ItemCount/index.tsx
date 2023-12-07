import React, { useState, useEffect } from 'react';

interface ItemCountProps {
  onAdd: (count: number) => void;
  stock: number;
}

const ItemCount: React.FC<ItemCountProps> = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1); // Resetar o count quando o stock ou outros fatores mudam
  }, [stock]);

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
  };

  return (
    <div>
      <button onClick={handleDecrement} className="bg-gray-300 px-4 py-2 rounded">
        -
      </button>
      <span className="mx-4">{count}</span>
      <button onClick={handleIncrement} className="bg-gray-300 px-4 py-2 rounded">
        +
      </button>
      <button
        onClick={handleAddToCart}
        disabled={stock === 0 || count === 0}
        className={`${
          stock === 0 || count === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'
        } text-white px-4 py-2 rounded`}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ItemCount;








