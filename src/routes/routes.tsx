import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import MyApplicationsPage from "../pages/MyApplicationsPage/MyApplicationsPage";
import AppSkeleton from "../pages/AppSkeleton/AppSkeleton";
import NetworkingPage from "../pages/NetworkingPage/NetworkingPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppSkeleton />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/my-applications",
        element: <MyApplicationsPage />,
      },
      {
        path: "/networking",
        element: <NetworkingPage />,
      },
    ]
  }
]);

export default router;