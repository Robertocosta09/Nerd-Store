/*import { createContext, useContext, useState } from "react";


interface ICart {
    isCart: boolean;
    setIsLoading: (status: boolean) => void;
}

const cartContextDefault = {
    isCart: false,
    setIsCart: () => null,
}

const CartContext = createContext<ICart>(cartContextDefault);

interface IProvider {
    children: React.ReactNode
}

const CartProvider = ({ children }: IProvider) => {
    const [teste, setTeste] = useState<boolean>(false);
    return (
        <CartContext.Provider
            value={{
                isCart: teste,
                setIsCart: setTeste
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }*/