import React from 'react';
import cn from 'classnames';

import styles from './Coin.module.scss';

interface CoinProps {
  symbol: string;
  name: string;
  image: string;
  price: number;
  marketCap: number;
  volume: number;
  priceChange: number;
}

const Coin: React.FC<CoinProps> = ({ name, price, symbol, marketCap, volume, image, priceChange }) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.coin}>
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className={styles.symbol}>{symbol}</p>
      </div>
      <div className={styles.data}>
        <p className={styles.price}>${price}</p>
        <p className={styles.volume}>${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className={cn(styles.percent, styles.red)}>{priceChange.toFixed(2)}%</p>
        ) : (
          <p className={cn(styles.percent, styles.green)}>{priceChange.toFixed(2)}%</p>
        )}
        <p className={styles.marketcap}>Mkt Cap: ${marketCap.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

export default Coin;
