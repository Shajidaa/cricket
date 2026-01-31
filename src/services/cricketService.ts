// src/services/cricketService.ts

const API_KEY = process.env.RAPIDAPI_KEY; // আপনার .env ফাইল থেকে কি (Key) নিবে
const API_HOST = 'cricbuzz-cricket.p.rapidapi.com'; //

export const getCricketStats = async (endpoint: string) => {
  const url = `https://${API_HOST}/${endpoint}`; //

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY as string, //
      'x-rapidapi-host': API_HOST //
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; //
  } catch (error) {
    console.error("Error fetching cricket data:", error);
    throw error;
  }
};