"use client";
import { CalendarCheck, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Exam } from "@/types/exam.type";
import { ExamCard } from "./exam-card";
import { SchedulingList } from "../scheduling/schedulingList";
import { useSchedulesStore } from "@/stores/schedule-store";

type Props = {
  availableExams: Exam[] | null;
};
export const ExamsTab = ({ availableExams }: Props) => {
  const { count } = useSchedulesStore(state => state)
  return (
    <Tabs defaultValue="exams" className="space-y-6">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="exams" className="flex items-center gap-2">
          <FileText className="size-4" />
          Exames Disponíveis
        </TabsTrigger>
        <TabsTrigger value="schedulings" className="flex items-center gap-2">
          <CalendarCheck className="size-4" />
          Exames Agendados
          <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
            {count}
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="exams" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableExams && availableExams.length > 0 ? (
            availableExams.map((exam) => <ExamCard key={exam.id} exam={exam} />)
          ) : (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              Nenhum exame disponível no momento.
            </div>
          )}
        </div>
      </TabsContent>
      <TabsContent value="schedulings" className="space-y-4">
        <SchedulingList />
      </TabsContent>
    </Tabs>
  );
};
