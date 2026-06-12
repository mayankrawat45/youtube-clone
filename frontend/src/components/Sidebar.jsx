import { Link } from "react-router-dom";
import {
  MdHome,
  MdSubscriptions,
} from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    "Home",
    "Shorts",
    "Subscriptions",
    "You",
    "History",
  ];

  return (
    <aside className="w-52 h-screen p-3">
      <ul className="space-y-3">
        <Link to="/">
          <li className="flex font-medium items-center gap-4 rounded-xl p-3 hover:bg-gray-100">
            <MdHome size={24} />
            Home
          </li>
        </Link>

        <Link to="/channel">
          <li className="flex font-medium items-center gap-4 rounded-xl p-3 hover:bg-gray-100">
            <MdSubscriptions size={24} />
            My Channel
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;