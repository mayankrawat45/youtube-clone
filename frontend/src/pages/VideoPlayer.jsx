import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getVideoById } from "../api/videoApi";

const VideoPlayer = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        setVideo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {video.title}
      </h1>
    </div>
  );
};

export default VideoPlayer;