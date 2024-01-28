import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Component/Main";
import History from "../Component/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/hisory",
    element: <History/>,
  },
]);

function Router()  {
  <RouterProvider router={router} />
}

export default Router