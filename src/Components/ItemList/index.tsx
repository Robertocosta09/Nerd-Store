// ItemListContainer.tsx

import React from 'react';
import { ProductItem } from '../ProductItem'; 

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const handleAddToCart = (quantity: number) => {
    // Adicione a lógica necessária aqui para adicionar ao carrinho
    console.log(`Adicionar ${quantity} itens ao carrinho`);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{greeting}</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <ProductItem id={1} fullName="Pop Funko Harry Potter" url="https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg" onAddToCart={handleAddToCart} />
        <ProductItem id={2} fullName="Pop Funko Spider Man" url="https://img.pccomponentes.com/articles/1067/10673717/1749-funko-pop-marvel-spiderman-no-way-home-the-amazing-spiderman.jpg" onAddToCart={handleAddToCart} />
        <ProductItem id={3} fullName="Pop Funko Luke Skywalker" url="https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/978aeeb-220647-img_236083_0506fa4b97bb8c8155c9df2ce5b0a8d0_1_b5ef.jpg" onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export {ItemListContainer}

