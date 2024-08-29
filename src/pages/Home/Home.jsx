// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react"
import "./Home.css"
import { CoinContext } from "../../context/CoinContext"

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])

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
      </div>
    </div>
  )
}

export default Home
