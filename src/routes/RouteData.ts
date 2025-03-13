import { RouteMetaData } from "../types/routes";
import Home from "../pages/home/index";
import modal from "../pages/modal";
import checkBox from "../pages/checkBox";
import tooltip from "../pages/tooltip";
import fieldAddition from "../pages/fieldAddition";
import overscroll from "../pages/overScroll";
import login from "../pages/login";
import toastBar from "../pages/toastbar";
import swiper from "../pages/swiper";

//드롭다운
import dropdownContainer from "../pages/dropdownContainer";
import dropdown from "../pages/dropdown";
import dropdowntype1 from "../pages/dropdown/type1";
import dropdowntype2 from "../pages/dropdown/type2";

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
    id: "05",
  },
  {
    name: "오버 플로우 스크롤",
    path: "/overscroll",
    element: overscroll,
    id: "06",
  },
  {
    name: "로그인",
    path: "/login",
    element: login,
    id: "07",
  },
  {
    name: "드롭다운",
    path: "/dropdown",
    element: dropdownContainer,
    id: "08",
    childElements: [
      {
        name: "드롭다운 타입",
        id: "dropdown",
        path: "",
        element: dropdown,
        linkName: "드롭다운 타입",
      },
      {
        name: "드롭다운 타입_1",
        id: "dropdown",
        path: "dropdowntype1",
        element: dropdowntype1,
        linkName: "드롭다운 타입_1",
      },
      {
        name: "드롭다운 타입_2",
        id: "dropdowntype2",
        path: "dropdowntype2",
        element: dropdowntype2,
        linkName: "드롭다운 타입_2",
      },
    ],
  },
  {
    name: "토스트 바",
    path: "/toastbar",
    element: toastBar,
    id: "09",
  },
  {
    name: "슬라이드",
    path: "/swiper",
    element: swiper,
    id: "09",
  },
];

export default RCMRouter;
