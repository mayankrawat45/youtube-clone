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