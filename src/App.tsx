import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "layout";
import Modal from "pages/modal";
import Home from "pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
