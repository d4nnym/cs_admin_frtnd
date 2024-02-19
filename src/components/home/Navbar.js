import { NavIcons } from "../../data/index";

export default function Navbar() {
  const navList = [
    { SvgIcon: NavIcons.HeartPlus, path: "/patient", name: "Paciente" },
    { SvgIcon: NavIcons.HeartPlus, path: "/patient", name: "Paciente" },
    { SvgIcon: NavIcons.HeartPlus, path: "/patient", name: "Paciente" },
  ];

  const navigation = navList.map((item, index) => {
    return (
      <>
        <div
          key={index}
          role="button"
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-500 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
        >
          <div className="grid place-items-center mr-4">
            <item.SvgIcon.SvgComponent width="18px" height="18px" />
          </div>
          {item.name}
        </div>
      </>
    );
  });

  return (
    <nav className="flex flex-col gap-1 min-w-[240px] px-2 pt-20 font-sans text-base font-normal text-white h-screen">
      {navigation}
    </nav>
  );
}
