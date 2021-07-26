import React from 'react';
import ProductItem from './ProductItem';

interface ISearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number) => void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results, totalPrice, onAddToWishlist }: ISearchResultsProps) => {
 
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  );
}

export default SearchResults;