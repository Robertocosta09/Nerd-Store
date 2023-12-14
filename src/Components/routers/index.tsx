import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../../Components/Navbar';
import { Category } from '../Pages/Category';
import { ItemDetailContainer } from '../../Components/ItemDetailContainer';
import ItemListContainer from '../ItemList';
import { Cart } from '../Cart';
import { useCart } from '../context/cartContext';

const Routers = () => {
  const { cartItems } = useCart();

  return (
    <BrowserRouter>
      <NavBar cartItems={cartItems.length} />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bem vindo a Nerd Store'} onAddToCart={() => {}} />} />
        <Route path='/category' element={<Category />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Routers };

