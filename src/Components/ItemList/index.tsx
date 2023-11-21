import React from 'react';
import ItemCount from '../ItemCount';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const handleAddToCart = (quantity: number) => {
  
  };
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{greeting}</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="border p-4">
          <h3 className="text-lg font-semibold mb-2">Colecionáveis</h3>
          <p>Pop Funk Harry Porter</p>
          <ItemCount stock={10} onAdd={handleAddToCart} initial={0} />
        </div>
      </div>
    </div>
  );
};

export { ItemListContainer };