import { useEffect, useState } from "react";

import { getMyVideos } from "../api/channelApi";

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;