import MainPage from "pages/MainPage";
import MusicPage, { loader as musicLoader } from "pages/MusicPage";
import TodoPage, { loader as todoLoader } from "pages/TodoPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "todo",
        element: <TodoPage />,
        loader: todoLoader,
      },
      {
        path: "music",
        element: <MusicPage />,
        loader: musicLoader,
      },
    ],
  },
]);

export default router;
