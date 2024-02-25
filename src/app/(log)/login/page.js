import FormControl from "@/components/login/FormControl";
import {ImagotypeLight } from "@/data/index";

export default function SignUp() {
  return (
    <main className="flex justify-center content-center h-screen">
      <div className="mt-20 ">
        <section className="bg-white drop-shadow-2xl rounded-lg border flex">
          <div dir="ltr" className="">
            <div className="rounded-s-lg drop-shadow w-[420px] h-[600px]  bg-cover bg-[url('../assets/img/landing.jpg')]">
              <div className="absolute">
                <ImagotypeLight.SvgComponent
                  height="40px"
                  width="185.6px"
                  className="m-6"
                />
              </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="mx-auto p-20 min-w-[512px]">
              <div className="text-center my-10">
                <h4 className="text-lg text-slate-400 font-medium mb-2">
                  Bienvenidos a la administración
                </h4>
                <h3 className="text-2xl text-slate-900 font-medium">
                  Inicio de sesión
                </h3>
              </div>
              <FormControl />
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center mt-6">
          <p className="text-slate-600 text-xs">
            ¿Olvidaste contraseña? Comunícate con{" "}
            <span className="font-medium">soporte@soporte.hn</span>
          </p>
        </div>
      </div>
    </main>
  );
}
