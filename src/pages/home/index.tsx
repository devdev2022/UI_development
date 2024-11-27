import { NavLink } from "react-router-dom";
import route from "../../routes/RouteData";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        WebkitFlexDirection: "column",
      }}
    >
      {route.map((item: any, index: number) => {
        if (item.name === "홈") {
          return null;
        }
        return (
          <NavLink
            to={item.path}
            key={index}
            style={{
              borderBottom: "1px solid #ececec",
              width: "100%",
              padding: "12px 15px",
              textAlign: "left",
              fontSize: 14,
            }}
          >
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}
