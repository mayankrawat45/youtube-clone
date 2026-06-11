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

