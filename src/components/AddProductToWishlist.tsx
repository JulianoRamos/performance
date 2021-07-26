import React from 'react';

export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

const AddProductToWishlist: React.FC<AddProductToWishlistProps> = ({ onAddToWishlist, onRequestClose }) => {
  return (
    <span>
      Deseja adicionar aos favoritos? 
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}

export default AddProductToWishlist;