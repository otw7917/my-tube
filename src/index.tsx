import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import VideoDetail from "./components/videoDetail";
import Video, { getPopularVideoList } from "./pages/Video";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Video />, loader: getPopularVideoList },
      { path: "video", element: <Video /> },
      { path: "video/:keyword", element: <Video /> },
      {
        path: "video/watch/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
