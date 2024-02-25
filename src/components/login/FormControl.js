"use client";

import FormGroup from "@/common/FormGroup";
import Button from "@/common/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { postProfile } from "@/service/profile";

export default function FormControl() {
  const path = {
    home: "/home",
    error: "/signin#error",
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const postData = await postProfile(data);

    if (!postData) {
      console.log("algo salió mal"); //handleShow();
    }

    console.log("si entra");
    router.push(path.home);
  };

  // type="email" {...register('email', { required: true })}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        type="text"
        inputRegister={{
          ...register("identidad", {
            required: true
          }),
        }}
        name="identidad"
        placeholder=""
        inpuMode="numeric"
      >
        Identidad
      </FormGroup>
      {errors.identidad && (
        <span className="text-xs text-slate-600">
          {errors.identidad.message || "Por favor, ingresa tu DNI"}
        </span>
      )}
      <FormGroup
        type="password"
        inputRegister={{ ...register("password", { required: true }) }}
        name="password"
        placeholder=""
      >
        Contraseña
      </FormGroup>
      {errors.password && (
        <span className="text-xs text-slate-600">
          Por favor, ingresa tu contraseña
        </span>
      )}
      <div>
        <div className="my-4">
          <Button type={"submit"} variant="btn-primary">
            Continuar
          </Button>
        </div>
      </div>
    </form>
  );
}
