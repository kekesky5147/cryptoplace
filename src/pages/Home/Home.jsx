// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Home.css"

const Home = () => {
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
    </div>
  )
}

export default Home
