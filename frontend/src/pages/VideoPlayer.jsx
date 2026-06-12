import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getVideoById,
  likeVideo,
  dislikeVideo,
} from "../api/videoApi";

import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../api/commentApi";
import { useAuth } from "../context/AuthContext";

const VideoPlayer = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        setVideo(data);
        const commentData = await getComments(id);
        setComments(commentData);
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

  const handleCommentSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await addComment(
        id,
        commentText,
        token
      );

      const updatedComments =
        await getComments(id);

      setComments(updatedComments);

      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (
    commentId
  ) => {
    const token = localStorage.getItem("token");

    await deleteComment(commentId, token);

    const updatedComments =
      await getComments(id);

    setComments(updatedComments);
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
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">
          Comments
        </h2>

        {user && (
          <div className="mb-6 flex gap-3">
            <input
              type="text"
              value={commentText}
              onChange={(e) =>
                setCommentText(e.target.value)
              }
              placeholder="Add a comment..."
              className="flex-1 rounded border p-2"
            />

            <button
              onClick={handleCommentSubmit}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Post
            </button>
          </div>
        )}

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="rounded-lg bg-gray-100 p-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {comment.userId?.username}
                </p>

                {user &&
                  user.id === comment.userId?._id && (
                    <button
                      onClick={() =>
                        handleDeleteComment(comment._id)
                      }
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  )}
              </div>

              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;