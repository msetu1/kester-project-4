import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OurTeam from "../page/OurTeam";
import Gallery from "../page/Gallery";
import MatchDetails from "../page/MatchDetails";
import Shop from "../page/Shop";
import Cart from "../page/Cart";
import MyAccount from "../page/MyAccount";
import News from "../page/News";
import NewsDetails from "../page/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/ourTeam",
        element:<OurTeam></OurTeam>,
      },
      {
        path: "/gallery",
        element:<Gallery></Gallery>,
      },
      {
        path: "/matchDetail",
        element:<MatchDetails></MatchDetails>,
      },
      {
        path: "/shop",
        element:<Shop></Shop>,
      },
      {
        path: "/cart",
        element:<Cart></Cart>,
      },
      {
        path: "/myAccount",
        element:<MyAccount></MyAccount>,
      },
      {
        path: "/news",
        element:<News></News>,
      },
      {
        path: "/newsDetails",
        element:<NewsDetails></NewsDetails>,
      },
    ],
  },
]);

export default router;
