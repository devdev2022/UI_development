import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout";

//라우팅
import RCMRouter from "./routes/RouteData";
import { default as createChildRoutes } from "./routes/utils/createRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {RCMRouter.map((paramObj: any) => {
            const { element: PathElement, path } = paramObj;
            if (!PathElement) return null;
            return (
              <Route key={path}>
                <Route path={paramObj.path} element={<PathElement />}>
                  {createChildRoutes(paramObj)}
                </Route>
              </Route>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
