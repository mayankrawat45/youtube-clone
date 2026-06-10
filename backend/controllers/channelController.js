import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, description } = req.body;

    if (!channelName) {
      return res.status(400).json({
        message: "Channel name is required",
      });
    }

    const existingChannel = await Channel.findOne({
      owner: req.user.id,
    });

    if (existingChannel) {
      return res.status(400).json({
        message: "User already has a channel",
      });
    }

    const channel = await Channel.create({
      channelName,
      description,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Channel created successfully",
      channel,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};