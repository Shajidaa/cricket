export async function getAllPlayers() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/players`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('There was a problem loading the players.');
    }

    return res.json();
  } catch (error) {
    console.error("Players Fetch Error:", error);
    return [];
  }
}