import "server-only";
import { User } from "@/types/user.type";
import { cookies } from "next/headers";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

export const getMe = async (): Promise<{ user: User } | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (!token) return null;

    const resp = await fetchWithAuth(`${process.env.API_URL}/users/me`);

    if (!resp.ok) {
      return null;
    }
    const data = await resp.json();

    return { user: JSON.parse(JSON.stringify(data)) };
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};
