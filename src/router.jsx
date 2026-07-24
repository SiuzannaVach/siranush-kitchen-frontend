import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/login", element: <Login /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);
