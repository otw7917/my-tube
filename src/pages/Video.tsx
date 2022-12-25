import { useLoaderData } from "react-router-dom";
import VideoList from "../components/videoList";

export async function getPopularVideoList() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    { headers: { "Content-Type": "application/json" } }
  );
  const result = await response.json();
  return result;
}

function Video() {
  const videoList = useLoaderData();
  return (
    <div>
      <VideoList videoList={videoList} />
    </div>
  );
}

export default Video;
