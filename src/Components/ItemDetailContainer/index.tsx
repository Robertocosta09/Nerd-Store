// ItemDetailContainer.tsx
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail'; 

interface Item {
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemDetailContainer = () => {
  const [item, setItem] = useState<Item | null>(null);

  const getItem = () => {
    return new Promise<Item>((resolve) => {
      setTimeout(() => {
        resolve({
          title: 'Colecionáveis Pop Funko',
          description: 'Pop Funko Harry Potter',
          price: 19.99,
          pictureUrl: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
        });
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((result: Item) => {
      setItem(result);
    });
  }, []);

  return (
    <div className="container grid-4 mx-auto mt-8 p-4 bg-gray-100">
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export { ItemDetailContainer };






