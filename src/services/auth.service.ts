import { Login } from "@/types/login.type";
import { redirect } from "next/navigation";

const api = process.env.NEXT_PUBLIC_API_URL;

type Signin = {
  message: string;
  error: string;
  statusCode: number;
};

export const signIn = async (payload: Login): Promise<Signin> => {
  try {
    const resp = await fetch(`${api}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    const data: Signin = await resp.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Erro de conexão. Tente novamente mais tarde.");
  }
};

export const Logout = async () => {
  await fetch(`${api}/auth/logout`, {
    method: "POST",
    credentials: "include",
    cache: "no-store",
  });

  redirect("/");
};
