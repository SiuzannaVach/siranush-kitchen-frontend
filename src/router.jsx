import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Ghapama from './pages/Ghapama';
import Xash from "./pages/Xash.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "login", element: <Login /> },
      { path: "admin", element: <Admin /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: 'ghapama', element: <Ghapama /> },
      { path: "xash", element: <Xash /> },
    ],
  },
]);
