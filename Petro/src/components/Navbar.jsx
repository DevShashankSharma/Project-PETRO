
import { Search, UserCircle, HelpCircle, Bell, Menu, X, ListTodo } from "lucide-react";
import PropTypes from 'prop-types';

const Navbar = ({ isOpen, setIsOpen }) => {

    return (
        <nav className="sticky top-0 z-50 w-full  px-4 flex justify-between items-center shadow-md bg-gray-50 dark:bg-gray-800 transition-all h-12">
            {/* Website Logo */}
            <div
                className={` flex items-center justify-center w-8 h-8  rounded-[20%]
                            bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transition-all duration-300 
                            hover:scale-105 active:scale-95 transform  `}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`transition-transform duration-300  `}
                >
                    {isOpen ? <X size={25} className="text-white" /> : <Menu size={25} className="text-white" />}
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow max-w-lg">
                <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-10 py-1.5 rounded-s-md rounded-e-md bg-white dark:bg-gray-700 text-gray-700 border-[1px] border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 shadow-sm"
                />
                <span className="absolute right-3 h-full text-gray-500 dark:text-gray-300 text-xs p-1">
                    <span className="font-semibold h-full flex justify-center items-center border-[1px] border-gray-400 dark:border-gray-600 rounded-[20%] px-2">/</span>
                </span>
            </div>

            <div className="flex items-center space-x-10">
                {/* Help Icon */}
                <HelpCircle className="text-gray-900 dark:text-white text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition" size={24} />

                {/* Notification Icon */}
                <Bell className="text-gray-900 dark:text-white text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition" size={24} />



                {/* User Icon
                <UserCircle className="text-gray-900 dark:text-white text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition" size={24} /> */}

                {/* Tasks Icon */}
                <ListTodo className="text-gray-900 dark:text-white text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition" size={24} />
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};

export default Navbar; 