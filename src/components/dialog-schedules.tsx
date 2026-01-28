import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Exam } from "@/types/exam.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AvailableTimes } from "@/utils/availableTimes.utils";
import { ScheduleFormSchema } from "@/schemas/schedule.schema";
import z from "zod";
import { useAuthStore } from "@/stores/auth-store";
import { createSchedule } from "@/services/actions/schedules.actions";
import { toast } from "sonner";

type Props = {
  exam: Exam;
};

export const DialogSchedules = ({ exam }: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const availableTimes = AvailableTimes();
  const { user } = useAuthStore((state) => state);

  const form = useForm<z.infer<typeof ScheduleFormSchema>>({
    resolver: zodResolver(ScheduleFormSchema),
    defaultValues: {
      userId: user?.id || "",
      examId: exam.id,
      patient: "",
      date: "",
      time: "",
      info: undefined,
      status: true,
    },
  });

  // Atualizar userId quando o usuário estiver disponível ou quando o dialog abrir
  useEffect(() => {
    if (open && user?.id) {
      form.setValue("userId", user.id);
    }
  }, [user, form, open]);

  // Garantir que userId está definido antes de submeter
  const onSubmit = async (values: z.infer<typeof ScheduleFormSchema>) => {
    // Verificar se userId está definido, se não, buscar do store
    const currentUserId =
      values.userId || user?.id || useAuthStore.getState().user?.id;

    if (!currentUserId) {
      toast.error(
        "Erro: Usuário não identificado. Por favor, faça login novamente.",
      );
      return;
    }

    // Garantir que o userId está no objeto values
    const formData = {
      ...values,
      userId: currentUserId,
    };
    setisLoading(true);
    try {
      const resp = await createSchedule(formData);
      toast.success(resp.message);
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      toast.error(
        error instanceof Error ? error.message : "Erro ao agendar exame",
      );
    } finally {
      setisLoading(false);
      setOpen(false);
      form.reset();
    }
  };

  const onOpenChange = (op: boolean) => {
    setOpen(op);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full mt-2">
          <Calendar className="size-4 mr-2" />
          Agendar Exame
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agendar Exame</DialogTitle>
          <DialogDescription>
            {exam && `Preencha os dados para agendar: ${exam.name}`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.error("Erros de validação:", errors);
                if (errors.userId) {
                  toast.error(
                    "Erro: Usuário não identificado. Por favor, recarregue a página.",
                  );
                }
              })}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="patient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Paciente</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data do Exame</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione um horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTimes.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações Adicionais (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite observações ou informações adicionais"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    onOpenChange(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit">
                  {!isLoading ? "Confirmar Agendamento" : "Agendando..."}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
