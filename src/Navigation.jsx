import { Button } from "./components/ui/button";
import { Globe } from "lucide-react";


function Navigation() {
  return (
    <nav className="z-50 bg-black/90 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 text-white py-3 rounded-full mx-4 my-3 relative">
        <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold">Booking 360</a>
         <div className="hidden md:flex space-x-8">
            <a href={'/'} className="transition-colors text-sm">Home</a>
        </div>
        </div>

        <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-xs hidden md:flex  text-white hover:bg-yellow-100 hover:text-black">
                <Globe className="h-6 w-6 mr-2" />
                En
            </Button>
            <Button variant="outline" size="sm" className="bg-black text-xs text-yellow-300 hover:bg-yellow-500 hover:text-black hidden md:flex">
                <a href="/login">Login</a>
            </Button>
            <Button variant="ghost" size="sm" 
            className="bg-white text-black text-xs hover:bg-yellow-100 text-xs hidden md:flex">
                <a href="/signup">Sign Up</a>
            </Button>


        </div>
        
         
        
        
     </nav>
    )
}
export default Navigation;