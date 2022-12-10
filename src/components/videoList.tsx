import { VideoItem, VideoListType } from "../types";
import VideoCard from "./videoCard";

function VideoList({ videoList }: VideoListType) {
  return (
    <div className='flex flex-wrap px-2 justify-center'>
      {videoList?.items.map((video: VideoItem) => {
        return (
          <VideoCard
            video={video}
            key={typeof video.id !== "object" ? video.id : video.id.videoId}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
