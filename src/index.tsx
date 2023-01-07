import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import VideoDetail from "./components/videoDetail";
import Video from "./pages/Video";
import { MockYoutubeApi } from "./api/mockYoutube";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const mockYoutubeApi = new MockYoutubeApi();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Video />,
        loader: mockYoutubeApi.getPopularVideoList,
      },
      {
        path: "video",
        element: <Video />,
        loader: mockYoutubeApi.getPopularVideoList,
      },
      {
        path: "video/:keyword",
        element: <Video />,
        loader: mockYoutubeApi.getSearchVideoList,
      },
      {
        path: "video/watch/:videoId",
        element: <VideoDetail />,
        loader: mockYoutubeApi.getChannel,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
