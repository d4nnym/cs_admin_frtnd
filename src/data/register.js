export const dataRegister = [
  {
    type: "number",
    restrictions: {
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
      name: "identidad",
      placeholder: "",
      inputMode: "numeric",
      label: "Identidad",
    },
  },
  {
    type: "text",
    restrictions: {
      ...register("primer_nombre", {
        required: true,
      }),
      name: "primer_nombre",
      placeholder: "",
      inputMode: "text",
      label: "Primer Nombre",
    },
  },{
    type: "text",
    restrictions: {
      ...register("segundo_nombre", {
        required: true,
      }),
      name: "segundo_nombre",
      placeholder: "",
      inputMode: "text",
      label: "Segundo Nombre",
    },
  },
  {
    type: "text",
    restrictions: {
      ...register("primer_apellido", {
        required: true,
      }),
      name: "primer_apellido",
      placeholder: "",
      inputMode: "text",
      label: "Primer Apellido",
    },
  },{
    type: "text",
    restrictions: {
      ...register("segundo_apellido", {
        required: true,
      }),
      name: "segundo_apellido",
      placeholder: "",
      inputMode: "text",
      label: "Segundo Apellido",
    },
  },
  {
    type: "email",
    restrictions: {
      ...register("email", {
        required: true,
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          message: "Por favor, ingresa un correo electrónico válido",
        },
      }),
      name: "email",
      placeholder: "",
      inputMode: "email",
      label: "Correo electrónico",
    },
  }
];
