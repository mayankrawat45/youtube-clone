import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VideoPlayer from "../pages/VideoPlayer";
import Channel from "../pages/Channel";
import UploadVideo from "../pages/UploadVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "video/:id",
        element: <VideoPlayer />,
      },
      {
        path: "channel",
        element: <Channel />,
      },
      {
        path: "upload",
        element: <UploadVideo/>,
      }
    ],
  },
]);

export default router;