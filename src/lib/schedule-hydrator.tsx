"use client";
import { useSchedulesStore } from "@/stores/schedule-store";
import { Schedules } from "@/types/schedule.type"
import { useEffect } from "react";

type Props = {
    schedules: Schedules[]
    count: number
}

export const SchedulesHydrator = ({schedules, count}:Props) => {
    const { setSchedules, setCount } = useSchedulesStore((state) => state);

    useEffect(()=>{
        setSchedules(schedules)
        setCount(count)
    },[schedules, setSchedules, count, setCount]);

    return null;
}