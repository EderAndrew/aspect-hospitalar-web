import {
  Card,
  CardContent,
} from "../ui/card";
import {  Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { FilteredSchedulings } from "./filteredSchedulings";
import { useSchedulesStore } from "@/stores/schedule-store";

export const SchedulingList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {schedules} = useSchedulesStore(state => state)

  // Filtrar agendamentos pelo nome do paciente
  const filteredSchedulings = schedules?.filter((scheduling) =>
    scheduling.patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (schedules?.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Nenhum agendamento realizado ainda.
          </p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por nome do paciente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2">
              {filteredSchedulings?.length} {filteredSchedulings?.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </p>
          )}
        </CardContent>
      </Card>
      {filteredSchedulings?.length === 0 ? (
        <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Nenhum agendamento encontrado para {searchTerm}.
          </p>
        </CardContent>
      </Card>
      ) : (
        filteredSchedulings?.map((scheduling) => (
          <FilteredSchedulings key={scheduling.id} scheduling={scheduling}/>
        ))
      )}
    </div>
  );
};
