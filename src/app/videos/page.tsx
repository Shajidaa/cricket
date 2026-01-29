

import VideosCard from "@/components/cards/VideosCard";
import { getAllVideos } from "@/services/videosService";
import {  VideoItem} from "@/types";




export default async function NewsPage() {
  const data = await getAllVideos();


  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-black italic mb-8 border-l-8 border-red-600 pl-4 ">
        LATEST VIDEOS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((video:VideoItem ) => (
          <VideosCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}