import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button className="text-xl">
          ☰
        </button>

        <h1 className="font-bold text-xl text-red-600">
          YouTube
        </h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-1 rounded"
        />
      </div>

      <Link
        to="/login"
        className="border px-4 py-1 rounded"
      >
        Sign In
      </Link>
    </header>
  );
};

export default Header;