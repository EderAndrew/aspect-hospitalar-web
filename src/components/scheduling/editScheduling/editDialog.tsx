import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScheduleEditFormSchema } from "@/schemas/schedule.schema"
import { updateSchedule } from "@/services/actions/schedules.actions"
import { Schedules } from "@/types/schedule.type"
import { AvailableTimes } from "@/utils/availableTimes.utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { toast } from "sonner"
import z from "zod"

type Props = {
    scheduling: Schedules
}

export const EditDialog = ({scheduling}: Props) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const availableTimes = AvailableTimes();

    const form = useForm<z.infer<typeof ScheduleEditFormSchema>>({
        resolver: zodResolver(ScheduleEditFormSchema),
        defaultValues: {
          date: scheduling.date,
          time: scheduling.time,
        },
      });

    const onSubmit = async (values: z.infer<typeof ScheduleEditFormSchema>) => {
        setIsLoading(true)
        try{
            const formData = {
                date: values.date,
                time: values.time
            }
            const data = await updateSchedule(scheduling.id, formData);

            toast.success(data.message)
        }catch(error){
            if(error instanceof Error){
                toast.error(error.message)
            }
        }finally{
            setIsLoading(false)
            setOpen(false)
        }
    }

    const onOpenChange = (op: boolean) => {
        setOpen(op);
      };
    
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Edit className="size-4 mr-2" />
                    Reagendar
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Reagendar Exame</DialogTitle>
                    <DialogDescription>
                    {scheduling && `Alterar data e horário do exame: ${scheduling.exam.name}`}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm">
                            <span className="font-medium text-muted-foreground">Paciente:</span>
                            <p className="text-foreground mt-1">{scheduling?.patient}</p>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-muted-foreground">Exame:</span>
                            <p className="text-foreground mt-1">{scheduling?.exam.name}</p>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nova Data do Exame</FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Novo Horário</FormLabel>
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
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DialogClose>
                                <Button type="submit">
                                {!isLoading ? "Confirmar Regendamento" : "Reagendando..."}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}