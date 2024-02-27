import { NavIcons } from "../../data/index";
import Link from "next/link";

export default function Navbar() {
  const navList = [
    { SvgIcon: NavIcons.AddPersonal, path: "/personal", name: "Personal" },
    { SvgIcon: NavIcons.HeartPlus, path: "/patient", name: "Paciente" },
    { SvgIcon: NavIcons.LogOut, path: "/close", name: "Cerrar Sesión" },
  ];

  const navigation = navList.map((item, index) => {
    return (
      <>
        <Link
          href={item.path}
          key={index}
          role="button"
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-500 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
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
