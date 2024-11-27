import { RouteMetaData } from "../types/routes";
import Home from "../pages/home/index";
import modal from "../pages/modal";
import checkBox from "../pages/checkBox";

const RCMRouter: RouteMetaData[] = [
  //Home
  {
    name: "홈",
    path: "/",
    element: Home,
    id: "01",
  },
  //modal
  {
    name: "모달",
    path: "/modal",
    element: modal,
    id: "02",
  },
  //checkBox
  {
    name: "체크박스",
    path: "/checkbox",
    element: checkBox,
    id: "03",
  },
];

export default RCMRouter;
