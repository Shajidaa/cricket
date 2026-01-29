import { VideoItem } from '@/types'
interface VideosCardProps {
  video: VideoItem;
}

export default function VideosCard({video}: VideosCardProps) {
  return (
    <div key={video.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
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
  )
}
