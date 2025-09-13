import Navbar from "@/components/Navbar";
import React from "react";
import toast from "react-hot-toast";
import { login } from "@/lib/api";

const Login: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError(true);
      toast.error("Debe llenar todos los campos");
      return;
    }
    try {
      const response = await login(formData.email, formData.password);
      if (response && response.user) {
        if (response.user.name) {
          localStorage.setItem("userName", response.user.name);
        }
        if (response.user.email) {
          localStorage.setItem("userEmail", response.user.email);
        }
      }
      toast.success("Inicio de sesión exitoso!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      toast.error("Error al iniciar sesión. Verifica tus credenciales.");
    }
    setFormData({ email: "", password: "" });
    setError(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container block justify-center items-center mx-auto px-6 py-36 max-w-md mt-20">
        <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${error && !formData.email ? "text-red-500" : ""}`}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`border rounded-lg px-4 py-2 w-full ${error && !formData.email ? "border-red-500" : "border-border"}`}
              placeholder="tu-email@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-2 ${error && !formData.password ? "text-red-500" : ""}`}
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`border rounded-lg px-4 py-2 w-full ${error && !formData.password ? "border-red-500" : "border-border"}`}
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">Debe llenar todos los campos</div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/80 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;