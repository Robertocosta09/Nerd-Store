// Routers.js
// routers/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../../Components/Navbar';
import { Category } from '../Pages/Category';
import {ItemDetailContainer} from '../../Components/ItemDetailContainer'; 
import ItemListContainer from '../ItemList';


const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar cartItems={0} />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bem vindo a Nerd Store'} onAddToCart={()=>{}}/>}/>
        <Route path='/category' element={<Category />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Routers };
