import React, { useState } from 'react'
import './App.css'
import Header from './layout/Header/Header'
import Hero from './Pages/HomePage/Hero'
import Product from './Pages/ProductsPage/Product'
import SmartphonesSection from './component/section/SmartphonesSection/SmartphonesSection'
import { useCount } from './hooks/useCount'
import CategoriesSection from './component/section/CategoriesSection/CategoriesSection'
import BrandsSection from './component/section/BrandsSection/BrandsSection'

function App() {

  const {count,increment,decrement,reset,displayMyName} = useCount();
  const [name,setName]= useState('');
  return (
    <>
    <Header />
    <Hero />
    <Product />
    <SmartphonesSection /> 
    <CategoriesSection />
    <BrandsSection />
{/* <div>
     sadsa
        <p>{count}</p> 
       <button onClick={increment} >increment</button>
       <button onClick={decrement} >decrement</button>
       <button onClick={reset} >reset</button>
       <button onClick={()=>{
        setName(displayMyName('Hironmoy'));
        increment();
       }} >click here to display my name</button>

        <p>{name}</p>
</div> */}
    </>
  )
}

export default App
