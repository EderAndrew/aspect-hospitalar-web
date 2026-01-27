"use server";
import { Schedule } from "@/types/schedule.type";
import { create } from "../schedule.service";
import { revalidatePath } from "next/cache";

export const createSchedule = async (schedule: Schedule) => {
  try {
    await create(schedule);
    revalidatePath("/dashboard");
    return { success: true, message: "Agendamento criado com sucesso." };
  } catch (error) {
    console.log(error);
  }
};
