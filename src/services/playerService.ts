
import playerData from '@/data/players.json';

export async function getAllPlayers() {

  // If we are on the server during build/runtime, return data directly
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
    return playerData;
  }
  // Fallback for client-side calls
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/players`);
    return res.json();
  } catch (error) {
    return playerData; // Return local data as fallback
  }
}

// export async function getPlayerById(id: string) {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/players/${id}`, {
//       next: { revalidate: 60 },
//     });

//     if (!res.ok) {
//       throw new Error('Player not found.');
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Player Fetch Error:", error);
//     return null;
//   }
// }
export async function getPlayerById(id: string) {
  // 1. Check for build time or missing API URL to use static data
  if (process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_API_URL) {
    const playerItem = playerData.find(item => item.id === id);
    return playerItem || null;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/players/${id}`, {
      next: { revalidate: 360 },
    });

    if (!res.ok) {
      throw new Error('Player not found.');
    }

    return res.json();
  } catch (error) {
    console.error("Player Fetch Error:", error);

    // 2. Fallback to static data on network/API error
    const playerItem = playerData.find(item => item.id === id);
    return playerItem || null;
  }
}