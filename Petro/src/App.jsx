import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className=" relative min-h-screen" style={{ width: "min(1420px, 100vw)" }}>
      <div className="w-full flex flex-col">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="flex">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div style={{ height: "calc(100vh - 3rem)" }} className={` ${isOpen ? "w-[88%]" : "w-[96%]"} transition-all duration-75 overflow-auto light-scrollbar`}>
            <Router>
              <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Router> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
