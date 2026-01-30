import "server-only";
import { EditSchedule, Schedule, Schedules } from "@/types/schedule.type";
import { Token } from "./token";

type PaginatedResponse<T> = {
  items: T[];
  total: number;
};

const api = process.env.API_URL

export const create = async (schedule: Schedule) => {
  const token = await Token()
  const resp = await fetch(`${api}/schedules/create`, {
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
    const token = await Token()
    const resp = await fetch(
      `${api}/schedules/allActiveSchedules?limit=${limit}&offset=${offset}`,
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

export const update = async (id:string, payload:EditSchedule): Promise<{message: string}> => {
  const token = await Token()
  const resp = await fetch(
    `${api}/schedules/updateSchedule/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `access_token=${token.value}`,
      },
      body: JSON.stringify({ 
        date: payload.date,
        time: payload.time
       }),
      credentials: "include",
    },
  );
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(data?.message || "Erro ao atualizar Agendamento");
  }

  return data;
}

export const remove = async (id: string) => {
  const token = await Token()
  const resp = await fetch(
    `${api}/schedules/removeSchedule/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `access_token=${token.value}`,
      },
      body: JSON.stringify({ status: false }),
      credentials: "include",
    },
  );
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(data?.message || "Erro ao remover Agendamento");
  }

  return data;
};
