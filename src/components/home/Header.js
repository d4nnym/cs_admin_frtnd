'use client';

import { ImagotypeLight } from "@/data/index";
import {useSession} from "next-auth/react"
import Link from "next/link";

export default function Header() {

  const {data: session, status } = useSession()

  //console.log(session?.user?.persona?.primer_nombre,{session,status})
  //const {persona} = session?.user

  return (
    <header className="fixed z-20 w-full">
      <div className="">
        <div className="flex items-center justify-between bg-transparent">
          <Link href={"/home"} className="m-2 p-4">
            <ImagotypeLight.SvgComponent height="26px" width="100%" />
          </Link>
          <div className="block bg-white">
            <p className="m-2 p-4">{session?.user?.persona?.primer_nombre}</p>

          </div>
        </div>
      </div>
    </header>
  );
}
