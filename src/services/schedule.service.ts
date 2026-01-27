import "server-only";
import { Schedule } from "@/types/schedule.type";
import { cookies } from "next/headers";

export const create = async (schedule: Schedule) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    throw new Error("Token de autenticação não encontrado");
  }

  const resp = await fetch(`${process.env.API_URL}/schedules/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `access_token=${token.value}`,
    },
    body: JSON.stringify(schedule),
    credentials: "include",
  });

  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(data?.message || "Erro ao criar Agendamento");
  }

  return data;
};
