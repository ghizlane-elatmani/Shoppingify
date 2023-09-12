"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdOutlineLocalGroceryStore,
  MdReplay,
} from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white w-16 sm:w-24 flex flex-col justify-between items-center py-5">
      {/* === LOGO === */}
      <div>
        <img src="/logo.svg" alt="logo svg" />
      </div>

      {/* === MENU === */}
      <div className="flex flex-col gap-10 w-full">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "border-primary" : "border-transparent"
          } border-l-4  flex justify-center py-2`}
        >
          <MdFormatListBulleted size={26} />
        </Link>

        <Link
          href="/history"
          className={`${
            pathname === "/history" ? "border-primary" : "border-transparent"
          } border-l-4  flex justify-center py-2`}
        >
          <MdReplay size={26} />
        </Link>

        <Link
          href="/statistics"
          className={`${
            pathname === "/statistics" ? "border-primary" : "border-transparent"
          } border-l-4  flex justify-center py-2`}
        >
          <MdInsertChartOutlined size={26} />
        </Link>
      </div>

      {/* === CART ICON === */}
      <a
        href="#"
        className="w-10 h-10 bg-primary hover:bg-primary-dark text-white duration-75 rounded-full flex items-center justify-center"
      >
        <MdOutlineLocalGroceryStore size={20} />
      </a>
    </nav>
  );
};

export default Sidebar;
