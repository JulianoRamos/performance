import React from 'react';

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

const ProductItem: React.FC<IProductItemProps> = ({ product }: IProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export default ProductItem;