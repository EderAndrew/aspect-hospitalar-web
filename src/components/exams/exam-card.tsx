import { Clock, Stethoscope } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Exam } from "@/types/exam.type";
import { DialogSchedules } from "../dialog-schedules";

interface Props {
  exam: Exam;
}

export const ExamCard = ({ exam }: Props) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle>{exam.name}</CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Stethoscope className="size-3" />
            {exam.specialty}
          </Badge>
        </div>
        <CardDescription>{exam.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4" />
          <span>Duração: {exam.duration}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <strong>Preparação:</strong> {exam.preparetion}
        </div>
        <DialogSchedules exam={exam} />
      </CardContent>
    </Card>
  );
};
