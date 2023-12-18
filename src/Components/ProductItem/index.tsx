// ProductItem.tsx
import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  id: number;
  fullName: string;
  src: string;
  onAddToCart: (quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, fullName, src, onAddToCart }) => {
  return (
    <div key={id} className="border p-4 mb-4">
      <img src={src} alt={fullName} className="mb-2 w-48" />
      <h3 className="text-lg font-semibold">{fullName}</h3>
      {<ItemCount onAdd={onAddToCart} stock={10} isStockZero={false} />}
      <Link to={`/item/${id}`}>
      <button>Ver detalhes</button>
      </Link>
    
    </div>
  );
};

export default ProductItem;



