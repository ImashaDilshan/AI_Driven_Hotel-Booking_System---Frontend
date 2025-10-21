import { useState } from "react";
import { Button }  from  "./components/ui/button";

function HotelCard(props) {
        
        const [num,setNum] = useState(1);
        const handleClick = () => {
            setNum(5);              // That's mean inform to react when we click the button it will set the num to 5 
            console.log(num);       // But here it will still print 1 because state update is asynchronous
            console.log("Hello");   // This will print Hello every time we click the button
        }

        // whaen we click the button the handleClick function is called which updates the state variable 'num' to 5.
        // But react does not immediately update the value of 'num' in the current render cycle.
        //  react Notifies that the state has changed and schedules a re-render.
        // {due to asynchronous nature of state updates in React, the console.log(num) still prints the old value until the next render cycle.}

    return (
         
        <a href="" className="block group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
             src={props.hotel.image}
             alt={props.hotel.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-100" />
            </div>
            <div className="mt-3 space-y-2">
            <h3 className="text-lg font-semibold mt-2">{props.hotel.name}</h3>
            </div>

            <div>
                <p>Times of Button Click Time :{num} </p>
                <Button className="w-full mt-2" onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </a>

        //Now the button click will update the state and update the UI
        
    );
}
export default HotelCard;