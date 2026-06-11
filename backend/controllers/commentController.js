import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  try {
    const { videoId, text } = req.body;

    const comment = await Comment.create({
      videoId,
      userId: req.user.id,
      text,
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      videoId: req.params.videoId,
    })
      .populate("userId", "username")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};