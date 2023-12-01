// ItemDetail/index.tsx
import React from 'react';

export {};

interface Item {
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

function ItemDetail({ item }: { item: Item }) {
  const { title, description, price, pictureUrl } = item;

  return (
    <div className="border p-4 mb-4">
      <img src={pictureUrl} alt={title} className="mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-bold">${price}</p>
    </div>
  );
}

export default ItemDetail;



