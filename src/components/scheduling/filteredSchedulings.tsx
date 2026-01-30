import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../ui/card";
import { Calendar, Clock, FileText, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Schedules } from "@/types/schedule.type";
import { RemoveDialog } from "../remove-dialog";

type Props = {
    scheduling: Schedules
}
export const FilteredSchedulings = ({scheduling}:Props) => {
    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
      };

    return(
        <Card key={scheduling.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-xl">{scheduling.exam.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <User className="size-3" />
                  {scheduling.patient}
                </CardDescription>
              </div>
              <Badge variant="secondary">Agendado</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="size-4 text-muted-foreground" />
                      <span>{formatDate(scheduling.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="size-4 text-muted-foreground" />
                      <span>{scheduling.time}</span>
                    </div>
                  </div>
                </div>
                <RemoveDialog scheduleId={scheduling.id} />
              </div>
              {scheduling.info && (
                <div className="pt-2 border-t">
                  <div className="flex items-start gap-2 text-sm">
                    <FileText className="size-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-medium text-muted-foreground">
                        Informações Adicionais:
                      </span>
                      <p className="text-foreground mt-1">{scheduling.info}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
    )
}