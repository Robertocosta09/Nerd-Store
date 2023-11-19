
import React from "react";

const NavBar = () => {
    const isLoading = false;


    return (
        <div className="bg-cyan-950 p-5	shadow-lg text-white flex justify-between">
         <h1>Nerd Store</h1>
             <ul className="flex gap-3 mr-20">
                <li className= "hover:bg-sky-700 rounded-lg cursor-pointer">Home</li>
                <li className= "hover:bg-sky-700 rounded-lg cursor-pointer">Produtos</li>
                <li className= "hover:bg-sky-700 rounded-lg cursor-pointer">Login</li>
             </ul>
</div>
    )
}

export {NavBar}


