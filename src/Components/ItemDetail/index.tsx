import React, { useState } from 'react';
import ItemCount from '../ItemCount';

interface ItemProps {
  id: number;
  full_name: string;
  description: string;
  price: number;
  owner: {
    avatar_url: string;
  };
}
function ItemDetail({ item}: {item : ItemProps}){
  const [showItemCount, setShowItemCount] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
const {full_name, owner, description,price} = item

  const handleAddToCart = (count: number) => {
    setQuantity(count);
    setShowItemCount(false);
    setTotalPrice(count * item.price);
  };

  const handleFinishPurchase = () => {
  
    window.location.href = '/cart';
  };

  return (
    <div>
      <img src={owner.avatar_url} alt={full_name} />
      <p>{description}</p>
      <p>Preço: ${price}</p>

      {showItemCount && <ItemCount onAdd={handleAddToCart} stock={10} />}

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
};

export default ItemDetail;









