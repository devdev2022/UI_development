import { RouteMetaData } from "../types/routes";
import Home from "../pages/home/index";
import modal from "../pages/modal";
import checkBox from "../pages/checkBox";
import tooltip from "../pages/tooltip";
import fieldAddition from "../pages/fieldAddition";
import overscroll from "../pages/overScroll";
import login from "../pages/login";

const RCMRouter: RouteMetaData[] = [
  {
    name: "홈",
    path: "/",
    element: Home,
    id: "01",
  },
  {
    name: "모달",
    path: "/modal",
    element: modal,
    id: "02",
  },
  {
    name: "체크박스",
    path: "/checkbox",
    element: checkBox,
    id: "03",
  },
  {
    name: "툴팁",
    path: "/tooltip",
    element: tooltip,
    id: "04",
  },
  {
    name: "필드 추가/삭제",
    path: "/fieldaddition",
    element: fieldAddition,
    id: "04",
  },
  {
    name: "오버 플로우 스크롤",
    path: "/overscroll",
    element: overscroll,
    id: "04",
  },
  {
    name: "로그인",
    path: "/login",
    element: login,
    id: "04",
  },
];

export default RCMRouter;
