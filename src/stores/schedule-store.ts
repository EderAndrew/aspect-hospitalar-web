import { Schedules } from "@/types/schedule.type";
import { create } from "zustand";

type ScheduleState = {
  schedules: Schedules[];
  setSchedules: (schedules: Schedules[]) => void;
  count: number;
  setCount: (count: number) => void;
};

export const useSchedulesStore = create<ScheduleState>((set) => ({
    schedules: [],
    setSchedules: (schedules: Schedules[]) => set({ schedules }),
    count: 0,
    setCount: (count) => set({count})
}));