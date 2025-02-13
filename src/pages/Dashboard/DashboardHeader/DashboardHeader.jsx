import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function DashboardHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(!true);

    return (
        <nav className="bg-[#ED1E79] flex justify-between items-center text-white">
            <div className="w-5/6 mx-auto flex justify-between items-center p-4 text-white">
                <NavLink to={'/'} className="text-lg font-bold">STA Task</NavLink>
                <div className="relative">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => setIsDropdownOpen(true)}

                    >
                        <img
                            src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <span>Admin Marie</span>
                    </div>

                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                                Profile
                            </Link>
                            <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
                                Dashboard
                            </Link>
                            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
