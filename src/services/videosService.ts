// services/videosService.ts
import videoData from '@/data/videos.json'; // Direct import

export async function getAllVideos() {
  // 1. Check if we are on the server (Build time or Server-side)
  if (typeof window === 'undefined') {
    // Return data directly without an HTTP call
    return videoData;
  }

  // 2. Client-side fallback (if you ever call this from a useEffect)
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const res = await fetch(`${baseUrl}/api/videos`, {
      next: { revalidate: 360 },
    });

    if (!res.ok) throw new Error('Failed to load videos');
    return await res.json();
  } catch (error) {
    console.error("Videos Fetch Error:", error);
    return videoData; // Fallback to local data on error
  }
}