import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Button } from './components/ui/button';
//import HotelCard from './HotelCard';
//import { HotelData} from './Data';
import Navigation from './Navigation';
import Hotellisting from './Hotellisting';


function App() {

  return (
    <>
    <Navigation />
    <Hotellisting />
   </>
  )
}

export default App
