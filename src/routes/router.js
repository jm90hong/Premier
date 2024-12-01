import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SubjectDrive from "../pages/SubjectDrive";


const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/subject-drive", element: <SubjectDrive /> },
]);



export default router;
