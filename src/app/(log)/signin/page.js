"use client";
import { useForm } from "react-hook-form";
import FormGroup from "@/components/login/FormGroup";
import Button from "@/common/Button";
import { Imagotype } from "@/data/index";

export default function SignUp() {
  return (
    <main className="flex justify-center content-center h-screen">
      <div className="">
        <div className="mt-10 mb-6">
          <h1 className="text-3xl font-medium">Administración</h1>
        </div>
        <div className="mx-auto border rounded border-slate-200 px-10 py-10">
          <div className="mx-audo my-4">
            <Imagotype.SvgComponent height="40px" width="100%" />
          </div>
          <div className="my-10">
            <h3 className="text-xl font-medium">Inicio de sesión</h3>
          </div>

          <form className="">
            <FormGroup type="email" name="email" placeholder="" required>
              Correo
            </FormGroup>
            <FormGroup type="password" name="password" placeholder="" required>
              Contraseña
            </FormGroup>

            <div>
              <div className="flex justify-end my-4">
                <Button type={"submit"} variant="btn-primary">
                  Continuar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
