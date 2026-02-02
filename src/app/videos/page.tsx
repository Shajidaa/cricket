

import { getAllVideos } from "@/services/videosService";
import { VideoItem } from "@/types";



export default async function NewsPage() {
  const data = await getAllVideos();
    console.log("Full API response:", data);

  return (
    <>
      
 <div className="mb-5 bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
           <h1 className="text-4xl md:text-5xl text-center font-black italic mb-8 pl-4 uppercase">
               Latest Videos
           </h1>
         </div>
         <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((video: VideoItem) => (
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
    </>
  );
}