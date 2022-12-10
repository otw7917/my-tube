import { useState, useEffect } from "react";
import Header from "./components/header";
import VideoList from "./components/videoList";
import { VideoListType } from "./types";

function App() {
  const [videoList, setVideoList] = useState<VideoListType>();

  // 최초 비디오 목록 가져오기
  useEffect(() => {
    async function getPopularVideoList() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        { headers: { "Content-Type": "application/json" } }
      );
      const result = await response.json();
      setVideoList(result);
    }
    getPopularVideoList();
  }, []);

  async function getSearchVideoList(searchTitle: string) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTitle}&type=video&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      const result = await response.json();
      setVideoList(result);
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }

  return (
    <div className='flex flex-col justify-center'>
      <Header getSearchVideoList={getSearchVideoList} />
      <VideoList videoList={videoList} />
    </div>
  );
}

export default App;
