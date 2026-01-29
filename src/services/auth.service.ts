import { Login } from "@/types/login.type";

const api = process.env.NEXT_PUBLIC_API_URL;
console.log("API: ", api);
export const signIn = async (payload: Login) => {
  try {
    const resp = await fetch(`${api}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(
        data?.message || "Erro ao autenticar. Verifique suas credenciais.",
      );
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Erro de conexão. Tente novamente mais tarde.");
  }
};
