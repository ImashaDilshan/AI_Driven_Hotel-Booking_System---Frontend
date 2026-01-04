import React from 'react';
//import { Button } from '../components/ui/button';
//import HotelCard from './HotelCard';
//import { HotelData} from './Data';
import Hotellisting from '../Hotellisting';
import { Button } from '../components/ui/button';
import { getAllHotels } from '../lib/Api';
import { useSelector } from 'react-redux';



function Homepage() {

  const counter = useSelector((state) => state.counter.value);
  console.log("Counter Value in Home Page:", counter);

  return (
    <>
   
    <Hotellisting />
     <p>Counter Value: {counter}</p>
    {/* <Button onClick={()=> getAllHotels()}  > Get Hotel Data</Button> */}
   </>
  )
}

export default Homepage;
