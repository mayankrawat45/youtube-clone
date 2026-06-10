import Video from "../models/Video.js";
import Channel from "../models/Channel.js";

export const createVideo = async (req, res) => {
  try {
    const {
      title,
      description,
      thumbnailUrl,
      videoUrl,
      category,
    } = req.body;

    const channel = await Channel.findOne({
      owner: req.user.id,
    });

    if (!channel) {
      return res.status(404).json({
        message: "Please create a channel first",
      });
    }

    const video = await Video.create({
      title,
      description,
      thumbnailUrl,
      videoUrl,
      category,
      channelId: channel._id,
    });

    res.status(201).json({
      message: "Video uploaded successfully",
      video,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("channelId", "channelName")
      .sort({ createdAt: -1 });

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate("channelId", "channelName");

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    const channel = await Channel.findOne({
      owner: req.user.id,
    });

    if (!channel || channel._id.toString() !== video.channelId.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    const channel = await Channel.findOne({
      owner: req.user.id,
    });

    if (!channel || channel._id.toString() !== video.channelId.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await Video.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Video deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};