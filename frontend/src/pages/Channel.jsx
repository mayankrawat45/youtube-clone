import { useEffect, useState } from "react";

import { getMyVideos } from "../api/channelApi";
import { deleteVideo } from "../api/videoApi";
import { Link } from "react-router-dom";
import { createChannel } from "../api/channelApi";


const Channel = () => {
  const [videos, setVideos] = useState([]);
  const [showCreateChannel, setShowCreateChannel] =
    useState(false);

  const [channelName, setChannelName] =
    useState("");

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
        if (
          error.response?.data?.message ===
          "Channel not found"
        ) {
          setShowCreateChannel(true);
        }

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


  const handleCreateChannel = async () => {
  try {
    const token =
      localStorage.getItem("token");

    await createChannel(
      {
        channelName,
        description: "",
      },
      token
    );

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

if (showCreateChannel) {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-6 text-3xl font-bold">
        Create Channel
      </h1>

      <input
        type="text"
        placeholder="Channel Name"
        value={channelName}
        onChange={(e) =>
          setChannelName(e.target.value)
        }
        className="mb-4 w-full rounded border p-2"
      />

      <button
        onClick={handleCreateChannel}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Create Channel
      </button>
    </div>
  );
}


  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        My Channel
      </h1>
      <Link
        to="/upload"
        className="mb-6 inline-block rounded bg-blue-500 px-4 py-2 text-white"
      >
        Upload Video
      </Link>
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

            <Link
              to={`/edit-video/${video._id}`}
              className="mr-2 rounded bg-blue-500 px-3 py-1 text-white"
            >
              Edit
            </Link>

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