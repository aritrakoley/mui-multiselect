import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import TestMultiselect from "./layouts/TestMultiselect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestMultiselect />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
