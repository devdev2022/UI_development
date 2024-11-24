import { NavLink } from "react-router-dom";
import route from "data/route.json";

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
      {route.data.map((item: any, index: number) => (
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
      ))}
    </div>
  );
}
