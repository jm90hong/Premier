import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import Login2Page from "../pages/Login2Page";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/login-2", element: <Login2Page /> },
]);

export default router;
