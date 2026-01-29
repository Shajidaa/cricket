
export async function getAllNews() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL||"http://localhost:3000"}/api/news`, {
      next: { revalidate: 60},
    });

    if (!res.ok) {
      throw new Error('There was a problem loading the news.');
    }

    return res.json();
  } catch (error) {
    console.error("News Fetch Error:", error);
    return [];
  }
}