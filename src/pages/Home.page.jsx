import React from 'react';
//import { Button } from '../components/ui/button';
//import HotelCard from './HotelCard';
//import { HotelData} from './Data';
import Hotellisting from '../Hotellisting';
import { Button } from '../components/ui/button';
import { getAllHotels } from '../lib/Api';
import Hero from '../Hero';




function Homepage() {

  return (
    <>
    <main>
       <div className="relative">
        <Hero />
       </div >
       <div>
        <Hotellisting />
       </div>
    </main>
   </>
  )
}

export default Homepage;
