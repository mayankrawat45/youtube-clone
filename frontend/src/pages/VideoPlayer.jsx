import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendedVideos from "../components/RecommendedVideos";

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

  const [editingCommentId, setEditingCommentId] =
    useState(null);

  const [editText, setEditText] =
    useState("");

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

  const handleEditComment = async (
    commentId
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      await updateComment(
        commentId,
        editText,
        token
      );

      const updatedComments =
        await getComments(id);

      setComments(updatedComments);

      setEditingCommentId(null);

      setEditText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
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

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                {video.channelId?.channelName?.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-lg font-semibold">
                  {video.channelId?.channelName}
                </p>

                <p className="text-sm text-gray-500">
                  {video.views} views
                </p>
              </div>

              <button className="ml-4 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-6 py-2 font-medium transition hover:bg-gray-200"
              >
                👍
                <span>{video.likes}</span>
              </button>

              <button
                onClick={handleDislike}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-6 py-2 font-medium transition hover:bg-gray-200"
              >
                👎
                <span>{video.dislikes}</span>
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-gray-100 p-4">
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
                  className="flex-1 border-b border-gray-300 bg-transparent px-2 py-2 outline-none focus:border-black"
                />

                <button
                  onClick={handleCommentSubmit}
                  className="rounded-full bg-blue-500 px-5 py-2 font-medium text-white"
                >
                  Comment
                </button>
              </div>
            )}

            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="flex gap-3 py-4"
                >
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">
                        {comment.userId?.username}
                      </p>

                      {user &&
                        user.id ===
                        comment.userId?._id && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setEditingCommentId(
                                  comment._id
                                );
                                setEditText(
                                  comment.text
                                );
                              }}
                              className="text-blue-500"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() =>
                                handleDeleteComment(
                                  comment._id
                                )
                              }
                              className="text-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                    </div>

                    {editingCommentId ===
                      comment._id ? (
                      <div className="mt-2 flex gap-2">
                        <input
                          value={editText}
                          onChange={(e) =>
                            setEditText(
                              e.target.value
                            )
                          }
                          className="flex-1 rounded border p-2"
                        />

                        <button
                          onClick={() =>
                            handleEditComment(
                              comment._id
                            )
                          }
                          className="rounded bg-green-500 px-3 py-1 text-white"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <p className="mt-1 text-gray-800">
                        {comment.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;