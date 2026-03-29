import { Button } from "../../components/ui/button";
import { useCreateHotelsMutation } from "../../lib/nApi";
import { useState } from "react";
import { z } from "zod";

const CreateHotels = () => {

        const [createHotels, { isLoading, isError, error }] = useCreateHotelsMutation();

        //part of Form State Initialization
        const [formData, setFormData] = useState({
            name: " Hotel Name",
            image: "",
            location: "Your Hotel Location",
            rate: 4,
            description: "This is all about the hotel",
            price: "200"
        });

        const formSchema = z.object({
            name: z.string().min(1, "Hotel name is required"),
            image: z.string().optional(),
            location: z.string().min(1, "Location is required"),
            rate: z.number().min(0, "Rate must be a positive number").max(5, "Rate cannot exceed 5").optional(),
            description: z.string().min(1, "Description is required"),
            price: z.string().min(0, "Price must be a positive number").optional(),
        });

        //part of Form Submission Handler
        const handleCreateHotel = async (e) => {
             e.preventDefault();   
             const validationResult = formSchema.safeParse(formData);
             if (!validationResult.success) {
                console.log("Validation Errors:", validationResult.error);
                //alert(`Validation Error`);
                return;
             }
             console.log("Validated Form Data:", validationResult.data);
          
        };
          //part of Form Input Change Handler
          const handleValueChange =  (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

    return (

        <main className="ml-7 p-4 py-8">
            <h1 className="text-2xl font-bold mb-4 align-center">Create Hotel</h1>
            <form onSubmit={handleCreateHotel} className="max-w-md">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="block mb-2 font-medium">Hotel Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="image" className="block mb-2 font-medium">Image URL</label>
                    <input type="text" id="image" name="image" value={formData.image} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="block mb-2 font-medium">Location</label>
                    <input type="text" id="location" required name="location" value={formData.location} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" />
                </div>
                <div className="flex flex-col gap-2"> 
                    <label htmlFor="rate" className="block mb-2 font-medium">Rate</label>
                    <input type="Number" id="rate" name="rate" value={formData.rate} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="block mb-2 font-medium">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" rows="4"></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="block mb-2 font-medium">Price</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleValueChange} className="w-md p-2 border border-gray-300 rounded mb-4" />
                </div>
                <Button type="submit">Submit</Button>
                {/* <Button onClick={handleCreateHotel} disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create Hotel"}
                </Button>
                {isError && <p className="text-red-500 mt-2">Error: {error?.data?.message || "Failed to create hotel."}</p>} */}
            </form>
         
        </main>
    )
}
export default CreateHotels;