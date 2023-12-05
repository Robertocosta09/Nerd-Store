// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../../Components/CartWidget"; // Importe o CartWidget

interface NavBarProps {
  cartItems: number;
}

const NavBar: React.FC<NavBarProps> = ({ cartItems }) => {
  return (
    <div className="bg-cyan-950 p-5 shadow-lg text-white flex justify-between">
      <h1>Nerd Store</h1>
      <ul className="flex gap-3 mr-20">
        <li className="hover:bg-sky-700 rounded-lg cursor-pointer"><Link to='/'>Home</Link></li>
        <li className="hover:bg-sky-700 rounded-lg cursor-pointer"><Link to='/Category'>Categoria</Link></li>
        <li className="hover:bg-sky-700 rounded-lg cursor-pointer">Login</li>
        <li className="text-white"> ({cartItems})</li>
      </ul>
      {/* Renderize o CartWidget aqui */}
      <CartWidget cartItems={cartItems} />
    </div>
  );
};

export { NavBar };




