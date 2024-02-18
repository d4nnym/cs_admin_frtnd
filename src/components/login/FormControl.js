'use client'

import FormGroup from "@/common/FormGroup";
import Button from "@/common/Button";

import { useForm } from "react-hook-form"

export default function FormControl() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);


  // type="email" {...register('email', { required: true })}
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup type="email" inputRegister={{...register('email', { required: true })}} name="email" placeholder="">
      Correo
    </FormGroup>
    {errors.email && <span className="text-xs text-slate-600">Por favor, ingresa tu correo electrónico</span>}
    <FormGroup type="password"  inputRegister= {{...register('password', { required: true })}} name="password" placeholder="">
      Contraseña
    </FormGroup>
    {errors.password && <span className="text-xs text-slate-600">Por favor, ingresa tu contraseña</span>}
    <div>
      <div className="my-4">
        <Button type={"submit"} variant="btn-primary">
          Continuar
        </Button>
      </div>
      
    </div>
    
  </form>
  )
}