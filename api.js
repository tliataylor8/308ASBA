// 

// // this JS file handles API requests for fetching tarot card data
// const BASE_URL = "https://api.giphy.com"; 
// const API_KEY = 'SarYYW1Cg09FVzzgaGrt0LxVeqzusOhT'

// export async function fetchTarotCard() {
//     try {
//         const response = await fetch(`${BASE_URL}/random?api_key=${API_KEY}&tag=tarot card&rating=g`);
//         if (!response.ok) throw new Error("Failed to fetch card");
//         const data = await response.json();
//         return data.data;
//     } catch (error) {
//         console.error("Error fetching card:", error);
//         return null;
//     }
// }
