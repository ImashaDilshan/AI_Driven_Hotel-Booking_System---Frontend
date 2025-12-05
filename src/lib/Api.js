const getAllHotels = () => {

    // Make an request to the API endpoint to fetch all hotels

    const res = fetch ("http://localhost:8000/api/HotelData" , {
        method: "GET",
        headers: {
            "Content-Type": "application/json" // mention the expected data format
        },
    }).then((res) => {
        return res.json(); // Parse the response as JSON But that also return a promise 
    }).then((data) => {
         // Return the parsed data
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching hotel data:", error);
    });
    
}

export { getAllHotels };