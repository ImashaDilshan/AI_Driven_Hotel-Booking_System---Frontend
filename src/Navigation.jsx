import { Button } from "./components/ui/button";
import { Globe } from "lucide-react";
import  { Link } from "react-router";
import { useSelector } from 'react-redux';

function Navigation() {

    const counter = useSelector((state) => state.counter.value);
  console.log("Counter Value in Navigation:", counter);

  return (
    <nav className="z-50 bg-black/90 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 text-white py-3 rounded-full mx-4 my-3 relative">
        <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">Booking 360</Link>
         <div className="hidden md:flex space-x-8">
            <Link to='/' className="transition-colors text-sm">Home</Link>
             <p> {counter}</p>
        </div>
        </div>

        <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-xs hidden md:flex  text-white hover:bg-yellow-100 hover:text-black">
                <Globe className="h-6 w-6 mr-2" />
                En
            </Button>
            <Button variant="outline" size="sm" className="bg-black text-xs text-yellow-300 hover:bg-yellow-500 hover:text-black hidden md:flex">
                <Link to="/login">Login</Link>
            </Button>
            <Button variant="ghost" size="sm" 
            className="bg-white text-black text-xs hover:bg-yellow-100 text-xs hidden md:flex">
                <Link to="/signup">Sign Up</Link>
            </Button>


        </div>
        
         
        
        
     </nav>
    )
}
export default Navigation;