const NavBar = () => {

    return (
        <div className="bg-cyan-950 p-5	shadow-lg text-white flex justify-between">
         <h1>Nerd Store</h1>
             <ul className="flex gap-5">
                <li className= "hover:bg-sky-700 rounded-lg ">Home</li>
                <li className= "hover:bg-sky-700 rounded-lg ">Produtos</li>
                <li className= "hover:bg-sky-700 rounded-lg">Login</li>
             </ul>
</div>
    )
}

export default NavBar;