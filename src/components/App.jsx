import { useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import ViewPage from "./ViewPage"
import SellPage from "./SellPage"
import Orders from "./Orders"
import Basket from "./Basket"
import User from "./User"
import AllUsers from "./AllUsers"

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/ViewPage" element={<ViewPage />} />
        <Route path="/SellPage" element={<SellPage />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/User" element={<User />} />
        <Route path="/AllUsers" element={<AllUsers />} />
      </Routes>
    </>
  )
}

export default App
