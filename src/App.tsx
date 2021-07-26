import React, { FormEvent } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import SearchResults from './components/SearchResults';

type Results = {
  totalPrice: number;
  data: any[]
}

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({ data: [], totalPrice: 0 });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map((product: any) => {
      return {
        ...product,
        priceFormatted: formatter.format(product.price)
      }
    })
    
    const totalPrice = data.reduce((total: number, product: any) => {
        return total + product.price;
      }, 0);

    setResults({ totalPrice, data: products });
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, [])

  return (
    <div>
      <h1>Search</h1>
    
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishlist={addToWishlist} />
    </div>
  );
}

export default App;