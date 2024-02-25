import { ImagotypeLight } from "@/data/index";
//import { ImgLanding } from "@/data/index";
// import Image from "next/image";  <Image src={ImgLanding.src} alt={ImgLanding.title} className="w-[420px] h-[600px] object-cover "/>

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gradient-to-b to-blue-600 from-sky-400">
      <div className="container h-screen flex justify-center items-center gap-10">
        <section className="bg-white drop-shadow-lg rounded-lg flex">
          <div dir="ltr" className="">
            <div className="rounded-s-lg w-[420px] h-[600px]  bg-cover bg-[url('../assets/img/landing.jpg')]">
              <div className="absolute">
                <ImagotypeLight.SvgComponent
                  height="40px"
                  width="185.6px"
                  className="m-10"
                />
              </div>
            </div>
          </div>
          <div className=" bg-white m-10">
            <h1 className="text-2xl font-semibold text-slate-600 my-4">
              Bienvenidos a la administración de:
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
}
