import { useEffect, useState } from "react";

import { getMyVideos } from "../api/channelApi";
import { deleteVideo } from "../api/videoApi";

const Channel = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token =
          localStorage.getItem("token");

        const data = await getMyVideos(
          token
        );

        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  const handleDeleteVideo = async (
    videoId
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      await deleteVideo(videoId, token);

      setVideos((prev) =>
        prev.filter(
          (video) => video._id !== videoId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        My Channel
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video._id}
            className="rounded-lg border p-4"
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="mb-3 rounded"
            />

            <h2 className="font-semibold">
              {video.title}
            </h2>

            <p>{video.category}</p>

            <button
              onClick={() =>
                handleDeleteVideo(video._id)
              }
              className="mt-3 rounded bg-red-500 px-3 py-1 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;