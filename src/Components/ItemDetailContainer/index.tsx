// ItemDetailContainer.tsx
import React, { useEffect, useState } from 'react';
import  ItemDetail  from '../ItemDetail';
import { useParams } from 'react-router-dom';

 export interface ItemsProps {
  id: number;
  full_name: string;
  description: string;
  price: number;
  owner: {
    avatar_url: string;
  };
}

const ItemDetailContainer = () => {
  const [items, setItems] = useState<ItemsProps[]>([]);
let id = useParams();
let idNumber = Number(id.id)

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
          },
            {
              id: 2,
              full_name: 'Funko Aranha Fastasma',
              description: 'Figura Spider-Gwen',
              price: 15.99,
              owner: {
                avatar_url: 'https://files.joguiba.com/images/ecommerce/FUN65723.jpg',
              },
            },
            {
              id: 3,
              full_name: 'Funko Dr. Estranho',
              description: 'Doutor Estranho Marvel',
              price: 19.99,
              owner: {
                avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/37df602-010107-shopping.jpg',
              },
          },
          {
            id: 4,
            full_name: 'Funko harry Potter',
            description: 'Harry Potter do filme 4',
            price: 19.99,
            owner: {
              avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
            },
        },
        {
          id: 5,
          full_name: 'Funko harry Potter',
          description: 'Harry Potter do filme 4',
          price: 19.99,
          owner: {
            avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
          },
      },
      {
        id: 6,
        full_name: 'Funko harry Potter',
        description: 'Harry Potter do filme 4',
        price: 19.99,
        owner: {
          avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
        },
    },
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const resp = await getData();
        const filteredResp = resp.filter((item) => item.id ===idNumber)
        setItems(filteredResp);
      } catch (error) {
        console.error('Erro', error);
      }
    };
    onMount();
  }, []);

  return (
    <div className="container grid-4 mx-auto mt-8 p-4 bg-gray-100">
      {items.map((item) =>(
        <ItemDetail item={item}/>
      ))}
    </div>
  );
};

export { ItemDetailContainer };






