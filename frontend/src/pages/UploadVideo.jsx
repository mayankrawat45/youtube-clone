import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createVideo } from "../api/videoApi";

const UploadVideo = () => {
    const navigate = useNavigate();
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token =
                localStorage.getItem("token");

            await createVideo(formData, token);

            alert("Video Uploaded");

            navigate("/channel");
        } catch (error) {
            console.log(error);
            alert("Upload Failed");
        }
    };

    return (
        <div className="mx-auto max-w-xl">
            <h1 className="mb-6 text-3xl font-bold">
                Upload Video
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    type="submit"
                    className="rounded bg-red-600 px-4 py-2 text-white"
                >
                    Upload Video
                </button>
            </form>
        </div>
    );
};

export default UploadVideo;