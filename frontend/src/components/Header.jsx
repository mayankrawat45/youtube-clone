import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/SearchContext";
import { FiMenu, FiSearch } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
    const { isSidebarOpen, setIsSidebarOpen } =
        useSidebar();

    const { user, logout } = useAuth();

    const { searchQuery, setSearchQuery } =
        useSearch();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b bg-white px-2 sm:px-4 ">
            {/* Left */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() =>
                        setIsSidebarOpen(!isSidebarOpen)
                    }
                    className="rounded-full p-2 hover:bg-gray-100"
                >
                    <FiMenu size={22} />
                </button>

                <Link
                    to="/"
                    className="flex items-center gap-1"
                >
                    <FaYoutube
                        className="text-red-600"
                        size={32}
                    />

                    <span className="hidden text-xl font-semibold tracking-tight sm:block">
                        YouTube
                    </span>
                </Link>
            </div>

            {/* Center */}
            <div className="mx-8  max-w-2xl flex-1 flex">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) =>
                        setSearchQuery(e.target.value)
                    }
                    placeholder="Search"
                    className="w-full rounded-l-full border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                />

                <button className="rounded-r-full border border-l-0 border-gray-300 bg-gray-50 px-6 hover:bg-gray-100">
                    <FiSearch size={20} />
                </button>
            </div>

            {/* Right */}
            {user ? (
                <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                        {user.username?.charAt(0).toUpperCase()}
                    </div>

                    <button
                        onClick={logout}
                        className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        to="/login"
                        className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                        Register
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;