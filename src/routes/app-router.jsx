import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRouter(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
             {...props}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
