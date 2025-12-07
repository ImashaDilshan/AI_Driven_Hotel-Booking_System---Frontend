import React from 'react';
//import { Button } from '../components/ui/button';
//import HotelCard from './HotelCard';
//import { HotelData} from './Data';
import Hotellisting from '../Hotellisting';
import { Button } from '../components/ui/button';
import { getAllHotels } from '../lib/Api';



function Homepage() {

  return (
    <>
    
    <Hotellisting />
    {/* <Button onClick={()=> getAllHotels()}  > Get Hotel Data</Button> */}
   </>
  )
}

export default Homepage;
