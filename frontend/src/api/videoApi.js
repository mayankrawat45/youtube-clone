import api from "./axios";

export const getAllVideos = async () => {
  const response = await api.get("/videos");
  return response.data;
};

export const searchVideos = async (query) => {
  const response = await api.get(
    `/videos/search/title?query=${query}`
  );

  return response.data;
};

export const getVideosByCategory = async (category) => {
  const response = await api.get(
    `/videos/category/${category}`
  );

  return response.data;
};

export const getVideoById = async (id) => {
  const response = await api.get(`/videos/${id}`);
  return response.data;
};

export const likeVideo = async (id) => {
  const response = await api.put(`/videos/${id}/like`);
  return response.data;
};

export const dislikeVideo = async (id) => {
  const response = await api.put(`/videos/${id}/dislike`);
  return response.data;
};

export const deleteVideo = async (
  videoId,
  token
) => {
  const response = await api.delete(
    `/videos/${videoId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


export const createVideo = async (
  videoData,
  token
) => {
  const response = await api.post(
    "/videos",
    videoData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};