import Home from "../../Components/Home/Home";
import Generator from "./../../Components/Generator/Generator";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Components/Main/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/generetor",
        element: <Generator></Generator>,
      },
    ],
  },
]);
