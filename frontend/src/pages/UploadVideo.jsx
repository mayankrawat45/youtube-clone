import { useState } from "react";

const UploadVideo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-3xl font-bold">
        Upload Video
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="YouTube URL"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <button
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;