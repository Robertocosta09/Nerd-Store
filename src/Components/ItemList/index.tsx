import React from 'react';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{greeting}</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="border p-4">
          <h3 className="text-lg font-semibold mb-2">Colecionáveis</h3>
          <p>Pop Funk Harry Porter</p>
          <button className="bg-blue-500 text-white px-2 py-1 mt-2">Adicionar ao Carrinho</button>
        </div>
        </div>
    </div>
  );
};

export {ItemListContainer};