import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Todos from "../pages/Todos";
import MyApp from "../pages/MyApp";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',            // Home 페이지
    element: <Root />,    // Root 컴포넌트
    errorElement: <ErrorPage />,
  },
  {
    path: '/todos',       // To-dos 페이지
    element: <Todos />,   // Todos 컴포넌트
    errorElement: <ErrorPage />,
  },
  {
    path: '/myapp',       // MyApp 페이지
    element: <MyApp />,   // MyApp 컴포넌트
    errorElement: <ErrorPage />,
  }

]);

export default router;
