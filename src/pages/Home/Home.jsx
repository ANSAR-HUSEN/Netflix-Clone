import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import First from '../../components/FirstSection/First'
import Second from '../../components/Second/Second'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    {/* <First/>
    <Second/> */}
    <Footer/>
    </>
  )
}

export default Home