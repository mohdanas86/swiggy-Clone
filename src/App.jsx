import React from 'react'
import Header from "./components/Header.jsx"
import Category from "./components/Category.jsx"
import TopItems from "./components/TopItems.jsx"
import Resturents from "./components/Resturents.jsx"
import FooterOptions from "./components/FooterOptions.jsx"
import DownloadOption from "./components/DownloadOption.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <>
    <Header />
    <Category />
    <TopItems />
    <Resturents />
    <FooterOptions />
    <DownloadOption />
    <Footer />
    </>
  )
}

export default App