import React, { useState, useEffect } from 'react';
import { NavBar } from '../../Navbar';
import { CartWidget } from '../../CartWidget';
import ItemListContainer from '../../ItemList'; // Adicione o caminho correto
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Loading } from '../../Loading';
import { IRepo } from '../../interface';
import { ItemDetailContainer } from '../../ItemDetailContainer';

const Home = () => {
  const [repoName, setRepoName] = useState<string>('')
  const [cartItems, setCartItems] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listRepo, setListRepo] = useState<IRepo[]>([]);

  const getListRepo = (): Promise<Response> => {
    return fetch('https://api.github.com/users/Robertocosta09');
  };
  const handleClick = () => {
    setListRepo((previous: IRepo[]) => [
      ...previous,
      {
        full_name: repoName,
        id: (previous.length > 0 ? previous[previous.length - 1].id : 0) + 1,
        owner: {
          avatar_url: 'https://www.tradeinn.com/f/13767/137677043/funko-pop-harry-potter-quidditch.jpg',
        },
      } as IRepo, 
    ]);
  };

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const resp = await getListRepo();
        const resposta = await resp.json();
        console.log()
        /*setListRepo(resp);*/
      } catch (error) {
        console.log('Ops, algo deu errado', error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, []);

  const handleAddToCart = (quantity: number) => {
    setCartItems(cartItems + quantity);
  };


  return (
    <>
      <CartWidget cartItems={cartItems} />
      <Loading loading={isLoading} nameScreen="home" />
      <div className="container mx-auto">
        <div className="flex mt-5">
          <Input setValue={setRepoName} />
          <Button title="Buscar" handleClick={handleClick} />
        </div>
      </div>
      <ItemListContainer greeting={'Bem vindo a Nerd Store'} listRepo={listRepo} onAddToCart={handleAddToCart} />
      <ItemDetailContainer />
    </>
  );
}

export {Home};

