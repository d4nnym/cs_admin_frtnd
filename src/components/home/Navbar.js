"use client";
import { NavIcons } from "@/data/index";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const navList = [
    { SvgIcon: NavIcons.AddPersonal, path: "/personal", name: "Personal" },
    { SvgIcon: NavIcons.HeartPlus, path: "/patient", name: "Paciente" },
    { SvgIcon: NavIcons.LogOut, path: "/close", name: "Cerrar Sesión" },
  ];
  //${pathname === item.path ? 'nav-active' : ''}
  const navigation = navList.map((item, index) => {
    return (
      <>
        <Link
          href={item.path}
          key={index}
          role="button"
          tabIndex="0"
          className={`nav-aside ${pathname === item.path ? "nav-active" : ""}`}
        >
          <div className="grid place-items-center mr-4">
            <item.SvgIcon.SvgComponent width="18px" height="18px" />
          </div>
          {item.name}
        </Link>
      </>
    );
  });

  return (
    <nav className="flex flex-col gap-1 min-w-[240px] px-2 pt-20 font-sans text-base font-normal text-white h-screen">
      {navigation}
    </nav>
  );
}
