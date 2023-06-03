import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Gallery from "../pages/Gallery";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
    },
    {
        path: "galerry",
        element: <Gallery />,
        errorElement: <ErrorPage />,
    },
]);

export { router };
