import { ExamsTab } from "@/components/exams/exam-tabs";
import { SchedulesHydrator } from "@/lib/schedule-hydrator";
import { allExams } from "@/services/exams.service";
import { findAllActivedSchedule } from "@/services/schedule.service";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const availableExams = await allExams();
  const response = await findAllActivedSchedule();
  const schedules = response?.items ?? [];
  const countSchedules = response?.total ?? 0;

  return (
    <>
    <SchedulesHydrator schedules={schedules} count={countSchedules}/>
     <div className="min-h-screen bg-background p-5">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl mb-2">Sistema de Agendamento Hospitalar</h1>
          <p className="text-muted-foreground text-lg">
            Gerencie seus agendamentos de exames de forma simples e eficiente
          </p>
        </div>
      </div>
      <ExamsTab
        availableExams={availableExams}
      />
     </div>
    </>
  );
}
