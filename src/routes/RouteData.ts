import { RouteMetaData } from "../types/routes";
import Home from "../pages/home/index";
import modal from "../pages/modal";
import checkBox from "../pages/checkBox";

export const RCMRouter: RouteMetaData[] = [
  //Home
  {
    path: "/",
    element: Home,
    id: "01",
  },
  //modal
  {
    path: "/modal",
    element: modal,
    id: "02",
  },
  //checkBox
  {
    path: "/checkbox",
    element: checkBox,
    id: "03",
  },
];
