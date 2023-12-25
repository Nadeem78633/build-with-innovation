import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  const token = localStorage.getItem("accessToken");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
