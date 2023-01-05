import { useLoaderData } from "react-router-dom";
import VideoList from "../components/videoList";

function Video() {
  const videoList = useLoaderData();
  return (
    <div>
      <VideoList videoList={videoList} />
    </div>
  );
}

export default Video;
