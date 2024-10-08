// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react"
import "./Home.css"
import { CoinContext } from "../../context/CoinContext"
import { Link } from "react-router-dom"

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState("")

  // 하위 검색어가 포함된 검색결과 표시하는 기능 ex)bitcoin의 bit만 검색해도 bit를 포함한 모든 리스트 표시
  const inputHandler = (event) => {
    setInput(event.target.value)
    if (event.target.value === "") {
      setDisplayCoin(allCoin)
      // 검색후에 검색어를 지우면 다시 상위 10개 코인 보여주기
    }
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
            list="coinlist"
            value={input}
            type="text"
            placeholder="search crypto"
            required
          />
          {/* 검색어 입력시에 드롭다운으로 리스트 보여주기  */}
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
            {/* 검색어 입력시에 드롭다운으로 리스트 보여주기  */}
          </datalist>

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
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
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
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
