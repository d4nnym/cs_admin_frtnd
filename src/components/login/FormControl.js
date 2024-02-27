"use client";

import FormGroup from "@/common/FormGroup";
import Button from "@/common/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function FormControl() {
  const path = {
    home: "/home",
    error: "/signin#error",
  };

  const { data: session, status } = useSession();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (status === "authenticated") {
    router.push(path.home);
  }

  const onSubmit = async (data, e) => {
    e.preventDefault();

    console.log({ ...data });
    const postData = await signIn("credentials", {
      redirect: false,
      ...data,
    });

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
        type="number"
        inputRegister={{
          ...register("identidad", {
            required: true,
            pattern: {
              value: /^0?\d{12}$/,
              message: "Por favor, ingresa un DNI válido",
            },
            maxLength: {
              value: 13,
              message: "El DNI debe contener 13 dígitos",
            },
          }),
        }}
        name="identidad"
        placeholder=""
        mode="numeric"
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
