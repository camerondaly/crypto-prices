import React from 'react';
import '../style/Crypto.css';

const Coin = ({ name, image, symbol, price, marketCap, priceChange, volume }) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className="crypto-symbol">{symbol}</p>
        </div>
        <div className="crypto-data">
          <p className="crypto-price">${price.toLocaleString(undefined, {'minimumFractionDigits':2})}</p>
          <p className="crypto-volume">Vol: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="crypto-percent green">{priceChange.toFixed(2)}%</p> 
            )
          }
          <p className="crypto-marketcap">
            Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Coin
