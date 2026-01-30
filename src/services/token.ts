import "server-only";
import { cookies } from "next/headers";

export const Token = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    throw new Error("Token de autenticação não encontrado");
  }
  
  return token
}