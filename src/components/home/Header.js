"use client";

import { ImagotypeLight } from "@/data/index";
import { ProfileIcons } from "@/data/index";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  //console.log(session?.user?.persona?.primer_nombre,{session,status})
  //const {persona} = session?.user

  return (
    <header className="fixed z-20 w-full">
      <div className="">
        <div className="flex items-center justify-between bg-transparent">
          <Link href={"/home"} className="m-2 p-4">
            <ImagotypeLight.SvgComponent height="26px" width="100%" />
          </Link>
          <Link
            href={"/profile"}
            className="block bg-white border text-slate-600 hover:bg-blue-600 hover:text-white m-4 rounded-full"
          >
            <div className="flex items-center py-2 px-4 gap-1">
              <p className=" font-semibold">{`${session?.user?.persona?.primer_nombre} ${session?.user?.persona?.primer_apellido}`}</p>
              <ProfileIcons.SvgComponent />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
