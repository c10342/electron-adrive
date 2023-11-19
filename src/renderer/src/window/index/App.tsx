import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { RouteEnum } from "@renderer/utils/enum";

const router = createHashRouter([
  {
    path: RouteEnum.Login,
    element: <Login />
  },
  {
    path: RouteEnum.Home,
    element: <Home />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
