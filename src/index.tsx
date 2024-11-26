import ReactDOM from "react-dom/client";
import "styles/global.css";
import "styles/component/component.css";
import "styles/page/page.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
