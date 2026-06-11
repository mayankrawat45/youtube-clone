import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getVideoById,
  likeVideo,
  dislikeVideo,
} from "../api/videoApi";


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

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };


  const handleLike = async () => {
    await likeVideo(id);

    const updatedVideo = await getVideoById(id);

    setVideo(updatedVideo);
  };

  const handleDislike = async () => {
    await dislikeVideo(id);

    const updatedVideo = await getVideoById(id);

    setVideo(updatedVideo);
  };

  return (
    <div className="max-w-5xl">
      <div className="aspect-video w-full">
        <iframe
          src={getEmbedUrl(video.videoUrl)}
          title={video.title}
          className="h-full w-full rounded-xl"
          allowFullScreen
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold">
        {video.title}
      </h1>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <p className="font-semibold">
            {video.channelId?.channelName}
          </p>

          <p className="text-sm text-gray-500">
            {video.views} views
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleLike}
          className="rounded-lg bg-gray-200 px-4 py-2"
        >
          👍 {video.likes}
        </button>

        <button
          onClick={handleDislike}
          className="rounded-lg bg-gray-200 px-4 py-2"
        >
          👎 {video.dislikes}
        </button>
      </div>

      <div className="mt-4 rounded-lg bg-gray-100 p-4">
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;