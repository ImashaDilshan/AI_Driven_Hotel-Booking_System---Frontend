// async await pattern (modern)

const getAllHotels = async () => {

        const res = await fetch ("http://localhost:8000/api/HotelData" , {
            method: "GET",
            headers: { "content-Type": "application/json" }
        });
        if (!res.ok) {
            throw new Error ("Failed to fetch hotel data");
        }
        const data = await res.json();
         //console.log(data);
        return data; // Return the parsed data
}

export { getAllHotels };

//     // then catch chain patten (old)

// const getAllHotels = () => {
//     // Make an request to the API endpoint to fetch all hotels

//     const res = fetch ("http://localhost:8000/api/HotelData" , {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json" // mention the expected data format
//         },
//     }).then((res) => {
//         return res.json(); // Parse the response as JSON But that also return a promise 
//     }).then((data) => {
//          // Return the parsed data
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error fetching hotel data:", error);
//     });
    
// }
// export { getAllHotels };