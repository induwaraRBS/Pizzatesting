import { useState } from 'react'
import Banner from "./components/Banner"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Beverages from './components/Beverages'
import WebgiViewer from './components/WebgiViewer'
import Promotions from './components/promotions'
import {BrowerRouter, BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Banner/>
        <Menu/>
        <Beverages/>
        <WebgiViewer/> 
        <Promotions/>
    </div>
    </BrowserRouter>
       
  )
}

export default App
