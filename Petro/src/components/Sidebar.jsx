import { useState } from "react";
import PropTypes from 'prop-types';
import { Home, User, Settings, ChevronDown, Moon, Sun } from "lucide-react";

const Sidebar = ({ isOpen, isDarkMode, toggleTheme }) => {

    const [openSubMenu, setOpenSubMenu] = useState(null);

    // Toggle dark mode

    const menuItems = [
        { title: "Home", icon: <Home size={24} /> },
        { title: "Profile", icon: <User size={24} /> },
        {
            title: "Settings",
            icon: <Settings size={24} />,
            subItems: ["Account", "Privacy", "Notifications"],
        },
    ];

    return (
        <div className={`sticky left-0 top-12 ${isOpen ? "w-[12%]" : "w-[4%]"} transition-all duration-300 border-r-2 border-gray-500`}>
            {/* Sidebar */}
            <div
                className={`flex flex-col items-start h-full w-full ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                    }  py-5 transition-all duration-300`}
            >


                {/* Menu Items */}
                <ul className="flex items-start flex-col w-full space-y-4 p-1">
                    {menuItems.map((item, index) => (
                        <li className={`flex w-full items-start justify-start flex-col`} key={index}>
                            <div
                                className={`flex items-start w-full justify-start ${isOpen ? "space-x-3" : ""}  cursor-pointer p-2 rounded-md transition-all duration-200
                                hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white
                                active:scale-95 transform`}
                                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
                            >
                                {/* Icon always visible */}
                                <div className="w-[24px]">
                                    {item.icon}
                                </div>

                                {/* Hide text when collapsed, with smooth effect */}
                                <span
                                    className={`transition-all transform duration-300 flex  
                                        ${isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 w-0"}`}
                                >
                                    {item.title}
                                    {/* Dropdown arrow for submenus */}
                                    {item.subItems && isOpen && (
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 mt-1 ml-1 transform
                                            ${openSubMenu === index ? "rotate-180" : "rotate-0"}`}
                                        />
                                    )}
                                </span>


                            </div>

                            {/* Submenu with smooth animation */}
                            {item.subItems && (
                                <ul
                                    className={`pl-6 pt-2 space-y-2 overflow-hidden transition-all duration-300 
                                        ${openSubMenu === index && isOpen ? "scale-x-100 opacity-100" : "scale-x-0 w-0 h-0 opacity-0"}`}
                                >
                                    {item.subItems.map((sub, subIndex) => (
                                        <li key={subIndex} className="text-sm hover:text-blue-400 cursor-pointer">
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>


                {/* Dark Mode Toggle */}
                <div className={`mt-8 p-1 w-full flex items-start justify-start`}>
                    <div
                        className={`flex items-start justify-start w-full ${isOpen ? "space-x-3" : ""}   cursor-pointer 
                        p-2 rounded-md transition-all 
                        hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white
                        active:scale-95 transform`}
                        onClick={toggleTheme}
                    >
                        <div className="w-[24px]">
                            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </div>
                        <span className={`transition-all ${isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 scale-y-0 w-0 h-0"}`}>
                            {isDarkMode ? "Light_Mode" : " Dark_Mode"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default Sidebar; 