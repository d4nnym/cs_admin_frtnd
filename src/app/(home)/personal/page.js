import RegisterFormControl from "@/components/personal/RegisterFormControl";

export default function Patient() {
  return (
    <div className="">
      <div className="container py-10">
        <div className="flex items-center justify-center">
          <div className="">
            <section className="bg-white drop-shadow-2xl rounded-lg border flex">
              <div className="mx-auto p-10 min-w-[512px]">
              <div className="text-center">
                <h3 className="text-2xl text-slate-900 font-medium">
                  Formulario de registro
                </h3>
              </div>
                <RegisterFormControl />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
