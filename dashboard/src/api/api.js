import axios from "axios";

const API_KEY = "cuvf2npr01qpi6rv36lgcuvf2npr01qpi6rv36m0";
const BASE_URL = "https://finnhub.io/api/v1";

export async function getStockData(symbol) { // Ensure 'export' is here
    try {
        const url = `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`;
        const response = await axios.get(url);
        console.log(`Stock data for ${symbol}:`, response.data);  // Debugging
        return response.data;
    } catch (error) {
        console.error("Error fetching stock data:", error);
        return null;
    }
}
