import { createBrowserRouter } from "react-router-dom";
// import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Recruitment from "./pages/RecruitmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "recruitment", element: <Recruitment /> },
    ],
  },
]);

export default router;
