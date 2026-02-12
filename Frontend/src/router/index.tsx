import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/LoginPage';
import { ROUTES } from './routes';
import MainLayout from "@/layouts/MainLayout";
import HomePage from '@/pages/HomePage';
import FindRequestPage from '@/pages/FindRequestPage';
export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.SEARCH, // Định nghĩa đường dẫn
        element: <FindRequestPage />,
      },
    ]
  },
]);