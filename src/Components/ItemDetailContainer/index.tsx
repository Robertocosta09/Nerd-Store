// ItemDetailContainer.tsx
import { useEffect, useState } from 'react';
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
  stock: number;
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
            stock: 10,
          },
              {
                id: 2,
                full_name: 'Aranha Fastasma',
                description: 'Figura Spider-Gwen',
                price: 15.99,
                owner: {
                  avatar_url: 'https://files.joguiba.com/images/ecommerce/FUN65723.jpg',
                },
                stock: 10,
              },
              {
                id: 3,
                full_name: 'Dr. Estranho',
                description: 'Doutor Estranho Marvel',
                price: 17.90,
                owner: {
                  avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/37df602-010107-shopping.jpg',
                },
                stock: 10,
            },
          {
            id: 4,
            full_name: 'Luke Skywalker',
            description: 'Funko POP! Star Wars Luke w/Child',
            price: 17.90,
            owner: {
              avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/978aeeb-220647-img_236083_0506fa4b97bb8c8155c9df2ce5b0a8d0_1_b5ef.jpg',
            },
            stock: 10,
        },
        {
          id: 5,
          full_name: 'Darth Vader',
          description: 'Funko POP! Star Wars Darth Vader',
          price: 19.99,
          owner: {
            avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/9e1620b-175050-funko-pop-star-wars-darth-vader-597.jpg',
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
        const filteredResp = resp.filter((item) => item.id ===idNumber)
        setItems(filteredResp);
      } catch (error) {
        console.error('Erro', error);
      }
    };
    onMount();
  }, []);

  return (
    <div className="container grid-4 mx-auto mt-8 p-4 bg-gray-100 w-80">
      {items.map((item) =>(
        <ItemDetail item={item} key={item.id}/>
      ))}
    </div>
  );
};

export { ItemDetailContainer };






