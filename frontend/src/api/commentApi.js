import api from "./axios";

export const getComments = async (videoId) => {
  const response = await api.get(
    `/comments/${videoId}`
  );

  return response.data;
};

export const addComment = async (
  videoId,
  text,
  token
) => {
  const response = await api.post(
    "/comments",
    {
      videoId,
      text,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};