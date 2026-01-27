import "server-only";
import { User } from "@/types/user.type";
import { cookies } from "next/headers";

export const getMe = async (): Promise<{ user: User } | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) return null;

  const resp = await fetch(`${process.env.API_URL}/users/me`, {
    headers: {
      Cookie: `access_token=${token.value}`,
    },
    cache: "no-store",
  });

  if (!resp.ok) return null;

  return resp.json();
};
