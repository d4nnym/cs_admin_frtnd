import React from "react";
import {Controller } from "react-hook-form";

const FormGroup = ({
  type,
  name,
  placeholder,
  onHandler,
  inputRegister,
  required,
  children,
}) => {
  return (
    <div role="input group" className="relative h-10 w-full my-4">
      <Controller name={name} />
      <input
        {...inputRegister}
        name={name}
        type={type}
        className="text-control peer"
        placeholder={placeholder}
        required={required}
      />
      <label className="label-control">{children}</label>
    </div>
  );
};

export default FormGroup;
