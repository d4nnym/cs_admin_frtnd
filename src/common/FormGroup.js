import React from "react";

const FormGroup = ({
  type,
  name,
  placeholder,
  inputRegister,
  required,
  children,
  mode="text", 
  classes="",
}) => {
  return (
    <div role="input_group" className="relative h-10 w-full my-4">
      <input
        {...inputRegister}
        name={name}
        type={type}
        className={`text-control peer ${classes}`}
        placeholder={placeholder}
        required={required}
        inputMode={mode}
      />
      <label className="label-control">{children}</label>
    </div>
  );
};

export default FormGroup;
