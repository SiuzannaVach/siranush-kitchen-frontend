const API_URL = "http://localhost:8080/api";

export const authService = {
  login: async (username, password) => {
    const basicAuth = "Basic " + btoa(`${username}:${password}`);

    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: basicAuth,
      },
    });

    if (!response.ok) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    // El backend confirma la identidad; asumimos ADMIN si el login coincide con el admin configurado
    return {
      username,
      role: "ADMIN",
      authHeader: basicAuth,
    };
  },
};
