"use client";

import FormGroup from "@/common/FormGroup";
import Button from "@/common/Button";
import { useForm } from "react-hook-form";
import {postRegister} from "@/service/postMethods";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RegisterFormControl() {

  const router = useRouter();

  const { data: session} = useSession();

  const path = {
    personal: "/personal",
    error: "/signin#error",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataRegister = [
    {
      type: "number",
      restrictions: {
        ...register("identidad", {
          required: "Por favor, ingresa tu DNI",
          pattern: {
            value: /^\d{13}$/,
            message: "Por favor, ingresa un DNI válido",
          },
          maxLength: {
            value: 13,
            message: "El DNI debe contener 13 dígitos",
          },
          minLength: {
            value: 13,
            message: "El DNI debe contener 13 dígitos",
          },
        }),
      },
      name: "identidad",
      placeholder: "",
      inputMode: "numeric",
      label: "Identidad",
    },
    {
      type: "text",
      restrictions: {
        ...register("primer_nombre", {
          required: "* Campo requerido",
          pattern: {
            value: /^\S+$/,
            message: "Por favor, ingresa un nombre valido",
          }
        }),
      },
      name: "primer_nombre",
      placeholder: "",
      inputMode: "text",
      label: "Primer Nombre",
    },{
      type: "text",
      restrictions: {
        ...register("segundo_nombre", {
          required: "* Campo requerido",
          pattern: {
            value: /^\S+$/,
            message: "campo no válido",	
          },
        }),
      },
      name: "segundo_nombre",
      placeholder: "",
      inputMode: "text",
      label: "Segundo Nombre",
    },{
      type: "text",
      restrictions: {
        ...register("primer_apellido", {
          required: "* Campo requerido",
          pattern: {
            value: /^\S+$/,
            message: "campo no válido",	
          },
        }),
      },
      name: "primer_apellido",
      placeholder: "",
      inputMode: "text",
      label: "Primer Apellido",
    },{
      type: "text",
      restrictions: {
        ...register("segundo_apellido", {
          required: "* Campo requerido",
          pattern: {
            value: /^\S+$/,
            message: "campo no válido",	
          },
        }),
      },
      name: "segundo_apellido",
      placeholder: "",
      inputMode: "text",
      label: "Segundo Apellido",
    },
    {
      type: "email",
      restrictions: {
        ...register("email", {
          required: "* Campo requerido",
          pattern: {
            value: /^\S+@\S+$/,
            message: "Por favor, ingresa un correo válido",
          },
        }),
      },
      name: "email",
      placeholder: "",
      inputMode: "email",
      label: "Correo Electrónico",
    },
    {
      type: "tel",
      restrictions: {
        ...register("telefono", {
          required: "* Campo requerido",
          pattern: {
            value: /^\d{8}$/,
            message: "Por favor, ingresa un número válido",
          },
        }),
      },
      name: "telefono",
      placeholder: "",
      inputMode: "numeric",
      label: "Teléfono",
      
    },
    {
      type: "text",
      restrictions: {
        ...register("direccion", {
          required: "* Campo requerido",
        }),
      },
      name: "direccion",
      placeholder: "",
      inputMode: "text",
      label: "Dirección"

    },
    {
      type:"date",
      restrictions: {
        ...register("fecha_nacimiento", {
          required: "* Campo requerido",
        }),
      },
      name: "fecha_nacimiento",
      placeholder: "",
      inputMode: "date",
      label: "Fecha de Nacimiento"
    },{
      type: "text",
      restrictions: {
        ...register("estado_civil", {
          required: "* Campo requerido",
        }),
      },
      name: "estado_civil",
      placeholder: "",
      inputMode: "text",
      label: "Estado Civil"
    },{
      type: "text",
      restrictions: {
        ...register("cargo", {
          required: "* Campo requerido",
        }),
      },
      name: "cargo",
      placeholder: "",
      inputMode: "text",
      label: "Cargo"
    },
    {
      type: "text",
      restrictions: {
        ...register("salario", {
          required: "* Campo requerido",
        }),
      },
      name: "salario",
      placeholder: "",
      inputMode: "text",
      label: "Salario"
      
    }
    
  ];

  const onSubmit = async (data, e) => {
    e.preventDefault();
    //console.log({ ...data });
    const fecha_actual = new Date()
    const anio = fecha_actual.getFullYear();
    const mes = fecha_actual.getMonth();
    const dia = fecha_actual.getDate();
    
    const { identidad, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, telefono, direccion, fecha_nacimiento, estado_civil, cargo,salario} = data;
    const persona = { identidad, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, telefono, direccion, fecha_nacimiento, estado_civil};
    const empleado = {identidad,cargo,fecha_contratacion: `${anio}-${mes}-${dia}`, salario};

    const postData = await postRegister({persona, empleado},session?.user?.jwt);

    if (!postData) {
      console.log("algo salio mal") //handleShow();
    }
    console.log({persona, empleado},session?.user?.jwt)
    console.log(postData);
    router.push(path.personal);
  };

  const listInput = dataRegister.map((item, index) => {
    return (
      <>
        <FormGroup
          key={index}
          type={item.type}
          inputRegister={item.restrictions}
          name={item.name}
          placeholder={item.placeholder}
          mode={item.inputMode}
        >
          {item.label}
        </FormGroup>

        {errors[item.name] && (
          <span className="text-xs text-red-600">
            {errors[item.name].message}
          </span>
        )}
      </>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {listInput}
        <div className="my-4">
          <Button type={"submit"} variant="btn-primary">
            Continuar
          </Button>
        </div>
      </form>
    </>
  );
}
