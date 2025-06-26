import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AuthPage from "./components/authentication/AuthPage";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import CasePage from "./components/case/CasePage";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Hide Navbar and Sidebar on /auth route
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className=" relative min-h-screen" style={{ width: "min(1420px, 100vw)" }}>
      <div className="w-full flex flex-col">
        {!isAuthPage && (
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        )}
        <div className="flex">
          {!isAuthPage && (
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleTheme={toggleTheme}
              isDarkMode={isDarkMode}
            />
          )}
          <div className={` ${
              !isAuthPage
                ? isOpen
                  ? "w-[88%] h-[calc(100vh-3rem)]"
                  : "w-[96%] h-[calc(100vh-3rem)]"
                : "w-full"
            } transition-all duration-75 `}>
            <Router>
              <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/case" element={<CasePage />} />
              </Routes>
            </Router> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
