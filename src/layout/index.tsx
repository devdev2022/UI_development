import { FC } from "react";
import { Outlet } from "react-router-dom";
const Layout: FC = () => {
  return (
    <div className="wrap">
      <Outlet />
    </div>
  );
};

export default Layout;
