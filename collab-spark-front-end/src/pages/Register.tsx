import Navbar from "@/components/Navbar";
import React from "react";
import { User } from "@/models/User";
import { register } from "@/lib/api";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const [formData, setFormData] = React.useState<User>({
    name: "",
    email: "",
    passwordHash: "",
  });
  const [error, setError] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.passwordHash) {
      setError(true);
      toast.error("Error en el registro. Intenta de nuevo.");
      return;
    }
    try {
      await register(formData.name, formData.email, formData.passwordHash);
      toast.success("Registro exitoso! Por favor inicia sesión.");
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Error en el registro. Intenta de nuevo.");
    }
    setFormData({
      name: "",
      email: "",
      passwordHash: "",
    });
    setError(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container block justify-center items-center mx-auto py-24 max-w-[25rem] mt-20">
        <h1 className="text-3xl font-bold mb-4">Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className={`block text-sm font-medium mb-2 ${
                error && !formData.name ? "text-red-500" : ""
              }`}
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className={`border rounded-lg px-4 py-2 w-full ${
                error && !formData.name ? "border-red-500" : "border-border"
              }`}
              placeholder="Tu nombre de usuario"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${
                error && !formData.email ? "text-red-500" : ""
              }`}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`border rounded-lg px-4 py-2 w-full ${
                error && !formData.email ? "border-red-500" : "border-border"
              }`}
              placeholder="tu-email@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-2 ${
                error && !formData.passwordHash ? "text-red-500" : ""
              }`}
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="passwordHash"
              className={`border rounded-lg px-4 py-2 w-full ${
                error && !formData.passwordHash
                  ? "border-red-500"
                  : "border-border"
              }`}
              placeholder="********"
              value={formData.passwordHash}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              Debe llenar todos los campos
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/80 transition"
          >
            Crear cuenta
          </button>
        </form>
        <p className="text-sm text-center text-muted-foreground mt-4 ">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-primary">
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
};
export default Register;
