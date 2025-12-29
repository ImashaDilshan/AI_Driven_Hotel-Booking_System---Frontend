
import HotelCard from './HotelCard';
import { useState } from 'react';
import LocationsTab from './LocationsTab';
import { useEffect } from 'react';
import { getAllHotels, getAllLocations } from './lib/Api';
import { Skeleton } from "@/components/ui/skeleton"


function Hotellisting() {

     const[SelectLocation,setSelectLocation] = useState("All");

     const[HotelData,setHotelData] = useState([]);
     const[isHotelLoading,setIsHotelLoading] = useState(true);
     const[isHotelError,setIsHotelError] = useState(false);
     const[errorMessage1,setErrorMessage1] = useState(null);

     const[locationData,setlocationData] = useState([]);
     const[isLocationLoading,setIsLocationLoading] = useState(true);
     const[isLocError,setIsLocError] = useState(false);
     const[errorMessage2,setErrorMessage2] = useState(null);
     
     useEffect(() => {
        getAllHotels()
            .then((data) => {
                setHotelData(data);
                //console.log("Fetched Hotel Data:", data);
            })
            .catch((error) => {
                //console.error("Error fetching hotel data:", error);
                setIsHotelError(true);
                setErrorMessage1(error.message || "Something went wrong while fetching hotel data.");
                setIsHotelLoading(false);
            });
        
        getAllLocations()
            .then((data) =>{
                //console.log("location fetching data:",data);
                setlocationData(data);
            })
            .catch((error) => {
                //console.error("Error fetching location data:", error);
                setIsLocError(true);
                setErrorMessage2(error.message || "Something went wrong while fetching location data.");
                setIsLocationLoading(false);
            });
      },[]);
    
    const handleLocationSelect = (SelectLocation) => {
        setSelectLocation(SelectLocation.name);
        console.log("Selected Location is :", SelectLocation);
    };
    // Get the name of the selected location 
    const SelectedLocation = locationData.find((loc) => loc.name === SelectLocation);
    const SelectedLocationName = SelectedLocation ? SelectedLocation.name : null;
    //console.log("key",SelectedLocationName);
    
    // Filter hotels based on selected location
    const filteredHotels = SelectLocation === "All" 
        ? HotelData 
        : HotelData.filter((hotel) => hotel.location.includes(SelectedLocationName));
        
    if (isHotelLoading || isLocationLoading) {
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
    
    if (isHotelError || isLocError) {
        return(
        <section className="px-8 py-8 lg:py-8">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Top Trending Hotels Worlwide
                </h2>
                <p className="text-left text-gray-600">
                    Explore the most popular hotels around the globe, known for their exceptional service, luxurious amenities, and unforgettable experiences. 
                </p>
                <p className="text-red-500 mt-4">
                    {errorMessage1 && <span>Something went wrong while fetching hotel data.: {errorMessage1}</span>}
                </p>
                 <p className="text-red-500 mt-4">
                    {errorMessage2 && <span>Something went wrong while fetching location data.: {errorMessage2}</span>}
                </p>
            </div>
                 
        </section>
    )
    }
    
}
export default Hotellisting;