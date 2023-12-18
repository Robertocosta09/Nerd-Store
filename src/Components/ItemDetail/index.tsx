import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';

interface ItemProps {
  id: number;
  full_name: string;
  description: string;
  price: number;
  owner: {
    avatar_url: string;
  };
  stock: number;
}

function ItemDetail({ item }: { item: ItemProps }) {
  const {full_name, owner, description, price, stock } = item;
  const [showItemCount, setShowItemCount] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentStock, setCurrentStock] = useState(stock)
  
  const navigate = useNavigate();

  const handleAddToCartClick = (count: number) => {
    setQuantity(count);
    /*setShowItemCount(false);*/
    setTotalPrice(count * price);
    setCurrentStock(currentStock-count)
  };

  const handleFinishPurchase = () => {
    navigate('/cart');
  };

  return (
    <div>
      <img src={owner.avatar_url} alt={full_name} />
      <p>{description}</p>
      <p>Preço: ${price}</p>
      <p>Quantidade em estoque:{currentStock}</p>

      <ItemCount onAdd={handleAddToCartClick} stock={currentStock} isStockZero={currentStock === 0} />


      {quantity > 0 && (
        <div>
          <p>Quantidade selecionada: {quantity}</p>
          <p>Valor Total: ${totalPrice}</p>
          <button onClick={handleFinishPurchase} className="bg-blue-500 text-white px-4 py-2 rounded">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;











