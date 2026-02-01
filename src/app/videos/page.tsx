

import { getAllVideos } from "@/services/videosService";
import { VideoItem } from "@/types";



export default async function NewsPage() {
  const { cricket_videos } = await getAllVideos();
  console.log(cricket_videos);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-black italic mb-8 border-l-8 border-red-600 pl-4 ">
        LATEST VIDEOS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cricket_videos?.map((video: VideoItem) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <iframe
                src={video.video_link}
                className="w-full h-full"
                title={video.title}
                allowFullScreen
              />
            </div>
            <div className="p-2">
              <h2 className="text-lg font-semibold text-gray-900 ">{video.title}</h2>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}