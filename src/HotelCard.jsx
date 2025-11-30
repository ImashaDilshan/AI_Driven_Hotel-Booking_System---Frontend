import { Hand, MapPin, MapPinCheck, Star } from "lucide-react";
import { Button }  from  "./components/ui/button";
import { Link } from "react-router";

function HotelCard(props) {
    // const HandleClick = () => {
    //     const h_id = props.hotel._id;
    //     console.log("Hotel ID:", h_id);
    
    return (
        
        
        <Link to={`/hotels/${props.hotel._id}`} className="block group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
             src={props.hotel.image}
             alt={props.hotel.name}
             className="object-cover w-full h-full transition-transform group-hover:scale-100" />
            </div>
            <div className="mt-3 space-y-2">
            <h3 className="text-lg font-semibold mt-2">{props.hotel.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2"/>
                <span>{props.hotel.location}</span>
            </div>
            <div className="flex item-center space-x-1">
                <Star className="h-4 fill-primary text-primary" />
                <span className="font-medium">
                    {props.hotel.rate ?? "No rating"}
                </span>
                <span className="text-muted-foreground">
                     ({props.hotel.reviews ?? "No"} Reviews)
                </span>
            </div>
            <div className="flex items-baseline space-x-2">
                <span className="text-xl font-bold">{props.hotel.price}</span>
            </div>
            {/* <div>
                <Button className="w-full mt-2">
                    Book Now
                </Button>
            </div> */}

            </div>

        </Link>
       
    )
}
export default HotelCard;