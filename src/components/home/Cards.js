"use client";

import { HomeIcons } from "@/data/index";
import Link from "next/link";


export default function HomeCards() {

 
  
  const navList = [
    {
      SvgIcon: HomeIcons.PersonalIcon,
      path: "/personal",
      name: "Registrar Personal",
      descriprion: "Módulo del registro del personal",
      style:"bg-red-500"
    },
    {
      SvgIcon: HomeIcons.PatientIcon,
      path: "/patient",
      name: "Registrar Pacientes",
      descriprion: "Módulo del registro de pacientes",
      style:"bg-blue-500"
    },
  ];

  const navigation = navList.map((item, index) => {
    return (
      <>
        <Link
          href={item.path}
          key={index}
          className={`cards-home group`}
        >
          <span className={item.style+` p-5 rounded-full text-white shadow-lg shadow-red-200`}>
            <item.SvgIcon.SvgComponent />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            {item.name}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {item.descriprion}
          </p>
        </Link>
      </>
    );
  });

  return (
    <div className="grid grid-cols-4 group   ">
      {navigation}
    </div>
  );
}
