/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { Schedule } from "@/types/schedule.type";
import { create, remove } from "../schedule.service";
import { revalidatePath } from "next/cache";

export const createSchedule = async (schedule: Schedule): Promise<any> => {
  try {
    await create(schedule);
    revalidatePath("/dashboard");
    return { success: true, message: "Agendamento criado com sucesso." };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Erro ao criar um novo Agendamento.",
    };
  }
};

export const removeSchedule = async (id: string): Promise<any> => {
  try {
    await remove(id);
    revalidatePath("/dashboard");
    return { success: true, message: "Agendamento removido com sucesso." };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Erro ao remover o agendamento.",
    };
  }
};
