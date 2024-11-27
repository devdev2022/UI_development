import { RouteMetaData } from "../types/routes";
import Home from "../pages/home/index";
import test1 from "../pages/modal";
export const RCMRouter: RouteMetaData[] = [
  //Home
  {
    path: "/",
    element: Home,
    id: "00",
  },
  //modal
  {
    path: "/modal",
    element: test1,
    id: "01_1",
  },
];
