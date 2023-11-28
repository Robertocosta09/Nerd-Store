import React, { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './Components/Navbar';
import { CartWidget } from './Components/CartWidget';
import { ItemListContainer } from './Components/ItemList';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Loading } from './Components/Loading';
import { List } from './Components/List';
import { IRepo } from './Components/interface';

function App() {
  const [cartItems, setCartItems] = useState<number>(0);
  const [repoName, setRepoName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listRepo, setListRepo] = useState<IRepo[]>([]);

  const getListRepo = (): Promise<IRepo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            full_name: 'Pop Funko Harry Potter',
            id: 1,
            owner: {
              avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg'
            }
          },
          {
            full_name: 'Pop Funko Spider Man',
            id: 2,
            owner: {
              avatar_url: 'https://img.pccomponentes.com/articles/1067/10673717/1749-funko-pop-marvel-spiderman-no-way-home-the-amazing-spiderman.jpg'
            }
          },
          {
            full_name: 'Pop Funko Luke Skywalker',
            id: 3,
            owner: {
              avatar_url: 'https://cdn.lojasonlinectt.pt/usercontent/pop-dimension/media/images/978aeeb-220647-img_236083_0506fa4b97bb8c8155c9df2ce5b0a8d0_1_b5ef.jpg'
            }
          },
        ]);
      }, 3000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const resp = await getListRepo();
        setListRepo(resp);
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, []);

  const handleAddToCart = (quantity: number) => {
    setCartItems(cartItems + quantity);
  };

  const handleClick = () => {
    setListRepo((previous) => [
      ...previous,
      {
        full_name: repoName,
        id: previous[previous.length - 1].id + 1,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22986830?v=4'
        }
      }
    ]);
  };

  return (
    <>
      <NavBar cartItems={0} />
      <Loading loading={isLoading} nameScreen="home" />
      <CartWidget cartItems={cartItems} />
      <ItemListContainer greeting={'Bem vindo a Nerd Store'}/>
      <div className="container mx-auto">
        <div className="flex mt-5">
          <Input setValue={setRepoName} />
          <Button title="Buscar" handleClick={handleClick} />
        </div>
        {listRepo.map((item, index) => (
          <List key={item.id} fullName={item.full_name} id={item.id} url={item.owner.avatar_url} />
        ))}
      </div>
    </>
  );
}

export default App;



