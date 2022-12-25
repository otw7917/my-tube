import { useParams } from "react-router-dom";

function VideoDetail() {
  let { videoId } = useParams();
  console.log(videoId);
  return (
    <div>
      <iframe
        id='existing-iframe-example'
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        title={videoId}
      />
    </div>
  );
}

export default VideoDetail;

// video size 480px wide 270pxx tall
