
import FormControl from "@/components/login/FormControl";
import { Imagotype } from "@/data/index";

export default function SignUp() {


  return (
    <main className="flex justify-center content-center h-screen">
      <div className="mt-20 ">
        <div className="mx-auto border rounded bg-white border-slate-200 drop-shadow-md px-20 py-20 min-w-[512px]">
          <div className="mx-audo my-4">
            <Imagotype.SvgComponent height="40px" width="100%" />
          </div>
          <div className="my-10">
            <h3 className="text-xl text-slate-600 font-medium">Inicio de sesión</h3>
          </div>
         <FormControl />
        </div>
        <div className="w-full flex justify-center mt-6"><p className="text-slate-600 text-xs">¿Olvidaste contraseña? Comunícate con <span className="font-medium">soporte@soporte.hn</span></p></div>
      </div>
    </main>
  );
}
