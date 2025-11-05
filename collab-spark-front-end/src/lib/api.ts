export const API_BASE_URL = "http://localhost:3001/api";

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  const data = await response.json();
  return data;
}

export async function register(name: string, email: string, passwordHash: string) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, passwordHash }),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }
  const data = await response.json();
  return data;
}

// Microproyectos API
export async function getMicroproyectos() {
  const response = await fetch(`${API_BASE_URL}/microproyectos/get-microproyectos`);
  if (!response.ok) {
    throw new Error("Failed to fetch microproyectos");
  }
  const data = await response.json();
  return data.microproyectos;
}

export async function createMicroproyecto(microproyectoData: any) {
  const response = await fetch(`${API_BASE_URL}/microproyectos/create-microproyecto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(microproyectoData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create microproyecto");
  }
  const data = await response.json();
  return data.microproyecto;
}

// Proyectos Escalables API
export async function getProyectosEscalables() {
  const response = await fetch(`${API_BASE_URL}/proyecto-escalable/get-proyectos-escalables`);
  if (!response.ok) {
    throw new Error("Failed to fetch proyectos escalables");
  }
  const data = await response.json();
  return data.proyectos;
}

export async function createProyectoEscalable(proyectoData: any) {
  const response = await fetch(`${API_BASE_URL}/proyecto-escalable/create-proyecto-escalable`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proyectoData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create proyecto escalable");
  }
  const data = await response.json();
  return data.proyecto;
}
