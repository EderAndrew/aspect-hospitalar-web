import z from "zod";

export const loginFormSchema = z.object({
  email: z
    .email("Informe um email válido.")
    .trim()
    .min(1, "Email é obrigatório."),
  password: z
    .string()
    .min(6, "Senha deve ter ao menos 6 caracteres.")
    .max(50, "Senha deve ter no máximo 50 caracteres."),
});
