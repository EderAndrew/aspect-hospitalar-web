import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { removeSchedule } from "@/services/actions/schedules.actions";
import { toast } from "sonner";

type Props = {
  scheduleId: string;
};

export const RemoveDialog = ({ scheduleId }: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handlerRemove = async () => {
    setisLoading(true);
    try {
      const resp = await removeSchedule(scheduleId);
      toast.success(resp.message);
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      toast.error(
        error instanceof Error ? error.message : "Erro ao remover Agendamento",
      );
    } finally {
      setOpen(false);
      setisLoading(false);
    }
  };

  const onOpenChange = (op: boolean) => {
    setOpen(op);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 className="size-4 mr-2" />
          Excluir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar Exclusão</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja excluir este Agendamento? Esta ação não pode
            ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button onClick={handlerRemove}>
            {!isLoading ? "Excluir" : "Excluindo..."}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
