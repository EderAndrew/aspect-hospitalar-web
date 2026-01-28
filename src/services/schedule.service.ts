import "server-only";
import { Schedule, Schedules } from "@/types/schedule.type";
import { cookies } from "next/headers";

type PaginatedResponse<T> = {
  items: T[];
  total: number;
};

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

export const findAllActivedSchedule = async (
  limit = 10,
  offset = 0,
): Promise<PaginatedResponse<Schedules> | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (!token) return null;

    const resp = await fetch(
      `${process.env.API_URL}/schedules/allActiveSchedules?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Cookie: `access_token=${token.value}`,
        },
        cache: "no-store",
      },
    );

    if (!resp.ok) {
      console.error(
        `Erro ao buscar Agendamentos: ${resp.status} ${resp.statusText}`,
      );
      return null;
    }

    const data: PaginatedResponse<Schedules> = await resp.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar exames:", error);
    return null;
  }
};
