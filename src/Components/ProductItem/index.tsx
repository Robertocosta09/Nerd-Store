

import React from 'react';
import ItemCount from '../ItemCount';

interface ProductItemProps {
  id: number;
  fullName: string;
  url: string;
  onAddToCart: (quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, fullName, url, onAddToCart }) => {
  return (
    <div key={id} className="border p-4 mb-4">
      <img src={url} alt={fullName} className="mb-2" />
      <h3 className="text-lg font-semibold">{fullName}</h3>
      <ItemCount stock={10} onAdd={onAddToCart} initial={0} />
    </div>
  );
};

export {ProductItem}


