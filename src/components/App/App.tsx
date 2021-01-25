import React, { useEffect, useState } from 'react';
import Coin from 'components/Coin';
import CoinType from 'types/coin';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10');
      const json = await response.json();
      setCoins(json);
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input className={styles.input} type="text" onChange={handleChange} placeholder="Search..." />
      </div>
      {filteredCoins.map(coin => (
        <Coin
          key={coin.id}
          symbol={coin.symbol}
          name={coin.name}
          image={coin.image}
          price={coin.current_price}
          marketCap={coin.market_cap}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default App;
