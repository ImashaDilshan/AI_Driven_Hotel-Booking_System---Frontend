import { Button } from "../../components/ui/button";
import HotelCreateForm from "../../HotelCreateForm";


const CreateHotels = () => {

    return (
        <main className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Create a New Hotel</h1>
            <HotelCreateForm />
        </main>
    )
}
export default CreateHotels;