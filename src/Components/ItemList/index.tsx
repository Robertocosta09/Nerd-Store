import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';

export interface ItemsProps {
  id: number;
  full_name: string;
  description: string;
  price: number;
  owner: {
    avatar_url: string;
  };
  stock: number;
}

interface ItemListContainerProps {
  greeting: string;
  onAddToCart: (quantity: number) => void;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting, onAddToCart }) => {
  const [items, setItems] = useState<ItemsProps[]>([]);

  const getData = (): Promise<ItemsProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve([
          {
            id: 1,
            full_name: 'Funko harry Potter',
            description: 'Harry Potter do filme 4',
            price: 19.99,
            owner: {
              avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
            },
            stock: 10,
          },
              {
                id: 2,
                full_name: 'Funko Aranha Fastasma',
                description: 'Figura Spider-Gwen',
                price: 15.99,
                owner: {
                  avatar_url: 'https://files.joguiba.com/images/ecommerce/FUN65723.jpg',
                },
                stock: 10,
              },
              {
                id: 3,
                full_name: 'Funko Dr. Estranho',
                description: 'Doutor Estranho Marvel',
                price: 19.99,
                owner: {
                  avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/37df602-010107-shopping.jpg',
                },
                stock: 10,
            },
          {
            id: 4,
            full_name: 'Funko harry Potter',
            description: 'Harry Potter do filme 4',
            price: 19.99,
            owner: {
              avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
            },
            stock: 10,
        },
        {
          id: 5,
          full_name: 'Funko harry Potter',
          description: 'Harry Potter do filme 4',
          price: 19.99,
          owner: {
            avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
          },
          stock: 10,
      },
      {
        id: 6,
        full_name: 'Funko harry Potter',
        description: 'Harry Potter do filme 4',
        price: 19.99,
        owner: {
          avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
        },
        stock: 10,
    },
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const resp = await getData();
        setItems(resp);
      } catch (error) {
        console.error('Erro', error);
      }
    };
    onMount();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{greeting}</h2>
      <div className="grid-cols-4 gap-4 mt-4 flex w-full h-full object-cover">
        {items.map((item) => (
          <ProductItem key={item.id} fullName={item.full_name} id={item.id} src={item.owner.avatar_url} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;




