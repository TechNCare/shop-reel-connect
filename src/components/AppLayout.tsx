
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;
