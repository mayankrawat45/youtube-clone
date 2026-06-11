import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VideoPlayer from "../pages/VideoPlayer";
import Channel from "../pages/Channel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/video/:id",
    element: <VideoPlayer />,
  },
  {
    path: "/channel",
    element: <Channel />,
  },
]);

export default router;