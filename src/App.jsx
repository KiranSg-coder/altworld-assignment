import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HomePage from "./Pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shortlisted" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
