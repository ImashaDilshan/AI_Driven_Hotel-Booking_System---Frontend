import { useParams } from "react-router";
import { HotelData } from '../Data';
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi , Hotel , TvMinimalPlay , Coffee } from "lucide-react";

const Hoteldetailspage = () => {

  const params = useParams(); // Access the dynamic parameters from the URL
  const hotelId = params._id; // string

  const hotel = HotelData.find((h) => h._id == hotelId); // h._id is number, hotelId is string
  
   return (
       <main className="px-4">
          <div className ="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="relative w-full h-[400px]">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="absolute object-cover rounded-lg" />
                </div>

                <div className="flex space-x-2">
                    <Badge variant="secondary">Rooftop View</Badge>
                    <Badge variant="secondary">French Cuisine</Badge>
                    <Badge variant="secondary">City Center</Badge>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold">{hotel.name}</h1>  
                        <div className="flex items-center mt-2">
                            <MapPin className="h-5 w-5 mr-1 text-muted-foreground"/>
                            <p className="text-muted-foreground">{hotel.location}</p>
                        </div>
                    </div>
                    <Button variant="outline" size="icon">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <span className="sr-only">Add to favourites</span>
                    </Button>
                </div>

                <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-bold">{hotel?.rate ?? "No rating"}</span>
                    <span className="text-muted-foreground">
                      ({hotel?.reviews ?? "No"} Reviews)
                    </span>
                </div>
                <p className="text-muted-foreground">{hotel.description}</p> 
                <Card>
                  <CardContent> 
                    <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Wifi className="h-5 w-5 mr-2"/>
                        <span>Free Wi-Fi</span>
                      </div>
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 mr-2"/>
                        <span>Restaurant</span>
                      </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="flex items-center">
                        <TvMinimalPlay className="h-5 w-5 mr-2"/>
                        <span>Flat-screen TV</span>
                      </div>
                      <div className="flex items-center">
                        <Coffee className="h-5 w-5 mr-2"/>
                        <span>Coffee maker</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <h1 className="text-2xl font-bold mb-2">{hotel.price}</h1>
                  <span className="text-muted-foreground">per night</span>
                </div>
            </div>
          </div> 
       </main>
   )
  }
  export default Hoteldetailspage;