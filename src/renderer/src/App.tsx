import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sla from "./pages/Sla";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { RouteEnum } from "./utils/enum";

const router = createHashRouter([
  {
    path: RouteEnum.Login,
    element: <Login />
  },
  {
    path: RouteEnum.Home,
    element: <Home />
  },
  {
    path: RouteEnum.Sla,
    element: <Sla />
  },
  {
    path: RouteEnum.PrivacyPolicy,
    element: <PrivacyPolicy />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
