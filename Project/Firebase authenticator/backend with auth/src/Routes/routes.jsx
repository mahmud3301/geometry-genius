import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LoginLayout from "../layouts/loginLayout/loginLayout";


// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout/>,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/singUp",
                element: <SignUp />,
            }
        ]
    }
])
export default router;