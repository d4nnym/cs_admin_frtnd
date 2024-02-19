import { ImagotypeLight } from "@/data/index";

export default function Header() {



  return (
    <header className="fixed z-20 w-full">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="m-2 p-4">
            <ImagotypeLight.SvgComponent height="32px" width="100%" />
          </div>
          <div className="block">
            <p className="m-2 p-4">Danny Matute</p>
          </div>
        </div>
      </div>
    </header>
  );
}
