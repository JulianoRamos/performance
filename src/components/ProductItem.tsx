import React, { memo } from 'react';

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

// shallow compare -> comparação rasa

const ProductItem: React.FC<IProductItemProps> = ({ product }: IProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export default memo(ProductItem, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});