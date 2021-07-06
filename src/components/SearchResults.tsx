import React from 'react';
import ProductItem from './ProductItem';

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results }: ISearchResultsProps) => {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        );
      })}
    </div>
  );
}

export default SearchResults;