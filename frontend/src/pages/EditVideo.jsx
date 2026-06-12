import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getVideoById,
  updateVideo,
} from "../api/videoApi";

const EditVideo = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    category: "",
  });

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const video =
          await getVideoById(id);

        setFormData({
          title: video.title,
          description:
            video.description,
          thumbnailUrl:
            video.thumbnailUrl,
          videoUrl: video.videoUrl,
          category: video.category,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      await updateVideo(
        id,
        formData,
        token
      );

      alert("Video Updated");

      navigate("/channel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Video
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />

        <input
          type="text"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />

        <input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />

        <button
          type="submit"
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Update Video
        </button>
      </form>
    </div>
  );
};

export default EditVideo;