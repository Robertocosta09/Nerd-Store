// ItemListContainer.tsx
import React from 'react';
import ProductItem from '../ProductItem';
import { IRepo } from '../interface';

interface ItemListContainerProps {
  greeting: string;
  listRepo: IRepo[];
  onAddToCart: (quantity: number) => void;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting, listRepo, onAddToCart }) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{greeting}</h2>
      <div className="grid-cols-4 gap-4 mt-4 flex">
        {listRepo.map((item) => (
          <ProductItem key={item.id} fullName={item.full_name} id={item.id} url={item.owner.avatar_url} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export {ItemListContainer};



