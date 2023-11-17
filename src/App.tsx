import React from 'react';
import './App.css';
import {NavBar} from './Components/Navbar';
import {CartWidget} from './Components/CartWidget';
import {ItemListContainer} from './Components/ItemList';


function App() {

  return (
    <React.Fragment>
      <NavBar />
      <CartWidget/>
      <ItemListContainer greeting={'Bem vindo a Nerd Store'}/>
    </React.Fragment>
  );
}

export default App;
