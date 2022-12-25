import { useNavigate } from "react-router-dom";
import { VideoProp } from "../types";

function VideoCard({ video }: VideoProp) {
  const { id, snippet, statistics } = video;
  const navigate = useNavigate();

  return (
    <div className='p-2 w-[400px] border-2 m-2 hover:scale-110'>
      <div
        className='w-full border-2 rounded-lg p-2 mb-2'
        onClick={() => navigate(`video/watch/${id}`, { state: video })}
      >
        <img
          src={snippet.thumbnails.high.url}
          alt='thumbnail'
          className='object-cover rounded-md'
        />
      </div>
      <div className='w-full border-2 rounded-lg p-2 flex items-center'>
        <div className='m-2'>
          <div className='bg-white w-10 h-10 rounded-full ' />
        </div>
        <div className='flex-grow'>
          <h5 className='m-h-10'>{snippet.title}</h5>
          <span>
            <a href='/'>{snippet.channelTitle}</a>
          </span>
          <div className='space-x-2'>
            <span className='text-sm'>
              {statistics ? statistics.viewCount : ""}
            </span>
            <span className='text-sm'>
              {statistics ? statistics.likeCount : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
