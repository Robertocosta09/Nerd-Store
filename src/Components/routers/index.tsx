// Routers.js
// routers/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { NavBar } from '../../Components/Navbar';
import { Category } from '../Pages/Category';
import {ItemDetailContainer} from '../../Components/ItemDetailContainer'; 


const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar cartItems={0} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Routers };
