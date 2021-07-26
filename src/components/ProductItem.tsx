import React, { memo, useState, lazy, Suspense } from 'react';

const AddProductToWishlist = lazy(() => import('./AddProductToWishlist'))

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishlist: (id: number) => void;
}

// shallow compare -> comparação rasa

const ProductItem: React.FC<IProductItemProps> = ({ product, onAddToWishlist }: IProductItemProps) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist && 
        <Suspense fallback={<div>Loading...</div>}>
          <AddProductToWishlist 
            onAddToWishlist={() => onAddToWishlist(product.id)} 
            onRequestClose={() => setIsAddingToWishlist(false)} 
          />
        </Suspense>
      }
    </div>
  );
}

export default memo(ProductItem, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});