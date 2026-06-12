import api from "./axios";

export const getMyVideos = async (token) => {
  const response = await api.get(
    "/videos/my/channel",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const createChannel = async (
  channelData,
  token
) => {
  const response = await api.post(
    "/channels",
    channelData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};