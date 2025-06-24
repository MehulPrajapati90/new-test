import React from 'react'
import Details from '../components/Details'
import HomeComponent from "../components/HomeComponent"
import Products from '../components/Products'
import ContactComponent from '../components/contactComponent'
import Industries from '../components/Industries'

const Home = () => {
  return (
    <>
      <HomeComponent/>
      <Details/>
      <Products/>
      <Industries/>
      <ContactComponent/>
    </>
  )
}

export default Home