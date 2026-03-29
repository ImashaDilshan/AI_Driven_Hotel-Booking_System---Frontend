import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormControl, FormDescription } from "./components/ui/form"
import { useCreateHotelsMutation } from "@/lib/nApi"


const formSchema = z.object({
    name: z.string().min(1, "Hotel name is required"),
    image: z.string().optional(),
    location: z.string().min(1, "Location is required"),
    rate: z.number().min(0, "Rate must be a positive number").max(5, "Rate cannot exceed 5").optional(),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0, "Price must be a positive number").optional(),
});

export default function HotelCreateForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Hotel Name",
            image: "",
            location: "Your Hotel Location",
            rate: 4,
            description: "This is all about the hotel",
            price: 200
        },
    })
    const [createHotels, { isLoading, isError, error }] = useCreateHotelsMutation();

    function onSubmit(data) {
        console.log("Validated Form Data:", data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hotel Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Hotel Name" {...field} />
                            </FormControl>
                            <FormDescription>This is your hotel name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="Image URL" {...field} />
                            </FormControl>
                            <FormDescription>Optional image URL for the hotel.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Hotel Location" {...field} />
                            </FormControl>
                            <FormDescription>City or address of the hotel.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="rate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rate</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    min={0}
                                    max={5}
                                    step={0.1}
                                    {...field}
                                    value={field.value}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormDescription>Rate from 0 to 5.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <textarea
                                    className="w-full rounded border border-gray-300 p-2"
                                    rows={4}
                                    placeholder="Hotel description"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>Description of the hotel.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    min={0}
                                    step={1}
                                    {...field}
                                    value={field.value}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormDescription>Nightly price in your local currency.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </Form>
    )
}
