import React from 'react'
import './App.css'
import Header from './layout/Header/Header'
import Hero from './Pages/HomePage/Hero'
import Product from './Pages/ProductsPage/Product'
import SmartphonesSection from './component/section/SmartphonesSection/SmartphonesSection'

function App() {


  return (
    <>
   <Header />
   <Hero />
   {/* <Product /> */}
   <SmartphonesSection />
    </>
  )
}

export default App
