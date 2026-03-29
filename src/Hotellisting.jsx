
import HotelCard from './HotelCard';
import { useState } from 'react';
import LocationsTab from './LocationsTab';
import { useEffect } from 'react';
import { useGetAllHotelsQuery, useAddLocationMutation, useGetAllLocationsQuery } from './lib/nApi';
// import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Button } from './components/ui/button';
import { Plus, PlusCircle } from 'lucide-react';


function Hotellisting() {

     const[SelectLocation,setSelectLocation] = useState("All");

    //  const[HotelData,setHotelData] = useState([]);
    //  const[isHotelLoading,setIsHotelLoading] = useState(true);
    //  const[isHotelError,setIsHotelError] = useState(false);
    //  const[errorMessage1,setErrorMessage1] = useState(null);

    //  const[locationData,setlocationData] = useState([]);
    //  const[isLocationLoading,setIsLocationLoading] = useState(true);
    //  const[isLocError,setIsLocError] = useState(false);
    //  const[errorMessage2,setErrorMessage2] = useState(null);
     
    //  useEffect(() => {
    //     getAllHotels()
    //         .then((data) => {
    //             setHotelData(data);
    //             console.log("Fetched Hotel Data:", data);
    //         })
    //         .catch((error) => {
    //             //console.error("Error fetching hotel data:", error);
    //             setIsHotelError(true);
    //             setErrorMessage1(error.message || "Something went wrong while fetching hotel data.");
    //             setIsHotelLoading(false);
    //         });
        
    //     getAllLocations()
    //         .then((data) =>{
    //             //console.log("location fetching data:",data);
    //             setlocationData(data);
    //         })
    //         .catch((error) => {
    //             //console.error("Error fetching location data:", error);
    //             setIsLocError(true);
    //             setErrorMessage2(error.message || "Something went wrong while fetching location data.");
    //             setIsLocationLoading(false);
    //         });
    //   },[]);

    // From RTK Query implementation
    
    const { 
        data: HotelData , 
        isLoading: isHotelLoading, 
        isError: isHotelError, 
        error: hotelError
     } = useGetAllHotelsQuery();

    const { 
        data: locationData = [], 
        isLoading: isLocationLoading, 
        isError: isLocError, 
        error: locError 
    } = useGetAllLocationsQuery();

    const [
        addLocation,
         {
             isLoading: isAddingLocation,
             isError: isAddLocationError,
             error: addLocationError,
         }
    ] = useAddLocationMutation();

    // const locationDataArray = locationData ? [{ _id: 'all', name: 'All' }, ...locationData] : [{ _id: 'all', name: 'All' }];
    const handleLocationSelect = (SelectLocation) => {
        setSelectLocation(SelectLocation.name);
        console.log("Selected Location is :", SelectLocation);
    };
    // Get the name of the selected location 
   const SelectedLocation = locationData.find((loc) => loc.name === SelectLocation);
    const SelectedLocationName = SelectedLocation ? SelectedLocation.name : null;
    
    // Filter hotels based on selected location
    const filteredHotels = SelectLocation === "All" 
        ? HotelData
        : HotelData.filter((hotel) => hotel.location?.includes(SelectedLocationName));
       // console.log("Filtered Hotels:", filteredHotels);

   
     if (isHotelLoading || isLocationLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[200px]">
                <Spinner className="h-8 w-8 text-primary animate-spin" />
                <p>Loading...</p>
            </div>
        ); 
        }

    if (isHotelError || isLocError) {
        return (
            <div className="text-red-500">
                <p>Error loading hotel data: {hotelError?.message || "Unknown error occurred."}</p>
                <p>Error loading location data: {locError?.message || "Unknown error occurred."}</p>
            </div>
        );
    }

    return(  
        <section className="px-8 py-8 lg:py-8">
            <div className="mb-15">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Top Trending Hotels Worlwide
                </h2>
                <p className="text-left text-gray-600">
                    Explore the most popular hotels around the globe, known for their exceptional service, luxurious amenities, and unforgettable experiences. 
                </p>
                <Button onClick={async() => {
                    try {
                        await addLocation({ name: 'japan' }).unwrap();

                    } 
                    catch (error) {
                        console.error("Failed to add location:", error);
                    } 
                   
                 }}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Location    
                </Button>
            </div>
                 

            <div className="flex items-center flex-wrap gap-x-4">
                {locationData.map((location)=>{
                    return <LocationsTab key={location._id} Location={location} onClick={handleLocationSelect} />
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4"> 
                {(filteredHotels).map((hotel)=>{
                    return <HotelCard key={hotel._id}  hotel={hotel} />
                })}
            </div>               
        </section>
    )
    
}
export default Hotellisting;

