import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/SearchContext";

const Header = () => {
    const { isSidebarOpen, setIsSidebarOpen } =
        useSidebar();

    const { user, logout } = useAuth();

    const { searchQuery, setSearchQuery } =
        useSearch();

    return (
        <header className="h-14 border-b flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <button
                    className="text-xl"
                    onClick={() =>
                        setIsSidebarOpen(!isSidebarOpen)
                    }
                >
                    ☰
                </button>

                <Link
                    to="/"
                    className="font-bold text-xl text-red-600"
                >
                    YouTube
                </Link>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) =>
                        setSearchQuery(e.target.value)
                    }
                    className="border px-3 py-1 rounded"
                />
            </div>

            {user ? (
                <div className="flex items-center gap-3">
                    <span className="font-medium">
                        {user.username}
                    </span>

                    <button
                        onClick={logout}
                        className="rounded border px-3 py-1"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Link
                    to="/login"
                    className="rounded border px-4 py-1"
                >
                    Sign In
                </Link>
            )}
        </header>
    );
};

export default Header;