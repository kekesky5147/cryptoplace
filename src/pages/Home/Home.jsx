// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react"
import "./Home.css"
import { CoinContext } from "../../context/CoinContext"

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  return (
    <div className="home">
      <div className="hero">
        <h1>
          WELCOME
          <br /> Crypto Market
        </h1>
        <p>made by Minseok</p>
        <form>
          <input type="text" placeholder="search crypto" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market gap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>
            <p>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
