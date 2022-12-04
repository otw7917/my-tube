import React, { useEffect, useState } from "react";
import { PopularVideoList } from "../types";
import VideoCard from "./videoCard";

function VideoList() {
  const [popVideo, setPopVideo] = useState<PopularVideoList>();

  useEffect(() => {
    async function getPopularVideos() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        { headers: { "Content-Type": "application/json" } }
      );
      const result = await response.json();
      setPopVideo(result);
    }
    getPopularVideos();
  }, []);

  return (
    <div>
      {popVideo?.items.map((v) => {
        return <VideoCard videoDetail={v} key={v.id} />;
      })}
    </div>
  );
}

export default VideoList;
