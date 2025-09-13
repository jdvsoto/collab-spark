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
