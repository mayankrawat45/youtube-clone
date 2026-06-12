import { Link } from "react-router-dom";
const Sidebar = () => {
  const menuItems = [
    "Home",
    "Shorts",
    "Subscriptions",
    "You",
    "History",
  ];

  return (
    <aside className="w-60 h-[calc(100vh-56px)] border-r p-4">
      <ul className="space-y-3">
        <Link to="/">
          <li className="cursor-pointer rounded-lg p-2 hover:bg-gray-100">
            Home
          </li>
        </Link>

        <Link to="/channel">
          <li className="cursor-pointer rounded-lg p-2 hover:bg-gray-100">
            My Channel
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;