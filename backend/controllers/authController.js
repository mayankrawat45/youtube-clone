export const registerUser = async (req, res) => {
  try {
    res.status(201).json({
      message: "Register Controller Working",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};