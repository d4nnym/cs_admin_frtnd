import { ImagotypeLight } from "@/data/index";
import { Imagotype } from "@/data/index";

export default function RootLog({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]">
        <header className="fixed drop-shadow-md top-0 bg-white w-full">
        <div className="flex content-start items-center gap-2 ml-6 my-4">
        <Imagotype.SvgComponent
              className=""
              height="24px"
              width="139px"
            />
          <h1 className="leading-none font-medium text-slate-600 ">| Administración</h1>
          
        </div>
        </header>
        <div className="">{children}</div>
        <footer className="fixed bottom-0 w-full h-10 bg-blue-600">
          <div className="flex justify-center items-center h-full gap-1">
            <ImagotypeLight.SvgComponent
              className=""
              height="15px"
              width="92px"
            />
            <p className="text-white text-xs ">Derechos Reservados © 2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
