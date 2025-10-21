import {HotelData ,locationData} from './Data';
import HotelCard from './HotelCard';
import { useState } from 'react';
import LocationsTab from './LocationsTab';




function Hotellisting() {


    const[SelectLocation,setSelectLocation] = useState(0);

    const handleLocationSelect = (SelectLocation) => {
        //console.log("Selected Location is :", SelectLocation);
        setSelectLocation(SelectLocation._id);
    };

    const SelectedLocationName = locationData.find((loc) => loc._id === SelectLocation).name;
    console.log("Selected Location Name is :", SelectedLocationName); // Output the name of the selected location 

    // Filter hotels based on selected location
    const filteredHotels = SelectLocation === 0 
        ? HotelData 
        : HotelData.filter((hotel) => hotel.location.includes(SelectedLocationName));


    return(
        <section className="px-8 py-8 lg:py-8">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Top Trending Hotels Worlwide
                </h2>
                <p className="text-left text-gray-600">
                    Explore the most popular hotels around the globe, known for their exceptional service, luxurious amenities, and unforgettable experiences. 
                </p>
            </div>

            <div className="flex items-center flex-wrap gap-x-4">
                {locationData.map((location)=>{
                    return <LocationsTab key={location._id} Location={location} onClick={handleLocationSelect} />
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4"> 
                {filteredHotels.map((hotel)=>{
                    return <HotelCard key={hotel._id}  hotel={hotel} />
                })}
            </div>

 
                
        </section>


            

    )
    
}
export default Hotellisting;