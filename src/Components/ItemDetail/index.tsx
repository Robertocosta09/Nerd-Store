import React, { useState } from 'react';
import ItemCount from '../ItemCount';

interface ItemDetailProps {
  item: Item;
}
interface Item {
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: ${item.price}</p>

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









