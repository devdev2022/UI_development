import React from "react";
import { Outlet } from "react-router-dom";

function DropDown() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DropDown;
