// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/NAvbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App
