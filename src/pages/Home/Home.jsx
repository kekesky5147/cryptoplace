// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react"
import "./Home.css"
import { CoinContext } from "../../context/CoinContext"

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState("")

  // 하위 검색어가 포함된 검색결과 표시하는 기능 ex)bitcoin의 bit만 검색해도 bit를 포함한 모든 리스트 표시
  const inputHandler = (event) => {
    setInput(event.target.value)
  }
  const searchHandler = async (event) => {
    event.preventDefault()
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }
  //////////////////////////////////////////////////

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
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="search crypto"
            required
          />
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
            <div className="line">
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
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
