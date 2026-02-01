// videosService.ts
export async function getAllVideos() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/videos`, {
      next: { revalidate: 360 },
    });

    if (!res.ok) {
      throw new Error('There was a problem loading the videos.');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Videos Fetch Error:", error);
    return [];
  }
}