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
        {menuItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-lg p-2 hover:bg-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;