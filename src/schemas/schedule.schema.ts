import z from "zod";

export const ScheduleFormSchema = z.object({
  userId: z.string().min(1, "ID do usuário é obrigatório"),
  examId: z.string().min(1, "ID do exame é obrigatório"),
  patient: z
    .string()
    .min(2, "Nome do paciente deve ter pelo menos 2 caracteres")
    .max(100, "Nome do paciente deve ter no máximo 100 caracteres")
    .trim()
    .refine(
      (value) =>
        value.length >= 2 && value.split(" ").filter(Boolean).length >= 1,
      "Nome do paciente não pode ficar em branco",
    ),

  date: z
    .string()
    .min(1, "Data do exame é obrigatória")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "A data do exame deve ser hoje ou uma data futura"),

  time: z
    .string()
    .min(1, "Horário é obrigatório")
    .regex(
      /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
      "Horário deve estar no formato HH:MM (ex: 09:00)",
    )
    .refine((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      const minMinutes = 8 * 60; // 08:00
      const maxMinutes = 17 * 60; // 17:00
      return totalMinutes >= minMinutes && totalMinutes <= maxMinutes;
    }, "Horário deve estar entre 08:00 e 17:00"),

  info: z
    .string()
    .max(500, "Informações adicionais devem ter no máximo 500 caracteres")
    .optional(),

  status: z.boolean(),
});


export const ScheduleEditFormSchema = z.object({
  date: z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD")
  .refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "A data do exame deve ser hoje ou uma data futura")
  .optional(),
  time: z
  .string()
  .regex(
    /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
    "Horário deve estar no formato HH:MM (ex: 09:00)",
  )
  .refine((time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const minMinutes = 8 * 60; // 08:00
    const maxMinutes = 17 * 60; // 17:00
    return totalMinutes >= minMinutes && totalMinutes <= maxMinutes;
  }, "Horário deve estar entre 08:00 e 17:00")
  .optional(),
})