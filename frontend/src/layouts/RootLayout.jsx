import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";

const RootLayout = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <Header />

      <div className="flex">
        {isSidebarOpen && <Sidebar />}

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;