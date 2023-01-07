import { useLocation, useParams } from "react-router-dom";
import Channel from "./channel";

function VideoDetail() {
  let { videoId } = useParams();
  const { state } = useLocation();
  console.log(state);
  return (
    <div className=''>
      <iframe
        id='existing-iframe-example'
        width='100%'
        height='640'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        title={videoId}
      />
      <div className='about_channel_container_need_to_be_seperate'>
        <Channel />
      </div>
    </div>
  );
}

export default VideoDetail;

// video size 480px wide 270pxx tall
